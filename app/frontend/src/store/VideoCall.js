import Axios from "axios";
import AgoraRTC from "agora-rtc-sdk";
// import generateToken from "../helpers/generate_access_token";

export default {
  namespaced: true,
  state: {
    option: {
      appID: "facc2f66a4394574a83a612d93852cb9",
      channel: "1",
      // token:
      //   "006facc2f66a4394574a83a612d93852cb9IAC+HrPAAG3NYrYhG7SokgyIujHQMk+64uAXzidazLAl7yo6c+RXoFHlIgCZSlYvXCn4XgQAAQDs5fZeAgDs5fZeAwDs5fZeBADs5fZe",
      // token:
      //   "006facc2f66a4394574a83a612d93852cb9IABxBXb7J5dQ6CPrMxjzDi91OhHt8g/pkOyjh/gao00zPyo6c+RXoFHlIgDhFPw9ryj4XgQAAQA/5fZeAgA/5fZeAwA/5fZeBAA/5fZe",
      token:
        "006facc2f66a4394574a83a612d93852cb9IAA+32TgEt59ONx+5xKgQztI6fHIKNtUdQPn1GFZVdvnN7fv3IMAAAAAEAA/+CcILmj5XgEAAQAuaPle",
      uid: "",
      cameraId:
        "8e894bbd72c0fbe871464fa7df1480e12b48ae73ac6a5bf9aa909c6a29e96d28",
      microphoneId: "default",
      cameraResolution: "default",
      mode: "live",
      codec: "h264",
    },
    rtc: {
      client: null,
      joined: false,
      published: false,
      localStream: null,
      remoteStreams: [],
      params: {},
    },
  },
  mutations: {},
  actions: {
    Toastify(_, options) {
      M.toast({ html: options.text, classes: options.classes });
    },
    Toast({ dispatch }, msg) {
      dispatch("Toastify", {
        text: msg,
        classes: "info-toast",
      });
    },
    addView(_, payload) {
      console.log(payload, "====================");
      // const { id, show } = payload;
      if (!$("#" + payload)[0]) {
        let html = `
          <div class="w-1/3 px-2 mb-4" id="remote_video_head_${payload}">
            <div class="flex">
              <div
                class="inline h-auto w-2 text-lg rounded-lg rounded-r-none bg-blue-400"
              ></div>
              <div
                class="inline w-full bg-gray-100 p-2 text-left rounded hover:shadow-md"
              >
                <div class="px-3 py-2" id="video_${payload} " style="height: 200px;">
                  <div id="remote_video_panel_${payload}" class="video-view">
                    <div id="remote_video_${payload}" class="video-placeholder"></div>
                    <div id="remote_video_info_${payload}" class="video-profile hide"></div>
                    <div id="video_autoplay_${payload}" class="autoplay-fallback hide"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        $("#video").append(html);
        /*<div id="remote_video_panel_${payload}" class="video-view">
          <div id="remote_video_${payload}" class="video-placeholder"></div>
          <div id="remote_video_info_${payload}" class="video-profile hide"></div>
          <div id="video_autoplay_${payload}" class="autoplay-fallback hide"></div>
        </div>
        */
        setTimeout(() => {
          $("body video").css("position", "relative");
        }, 2000);
      }
    },

    removeView(_, id) {
      if ($("#remote_video_head_" + id)[0]) {
        $("#remote_video_head_" + id).remove();
      }
    },

    getDevices(_, next) {
      AgoraRTC.getDevices(function(items) {
        items
          .filter(function(item) {
            return ["audioinput", "videoinput"].indexOf(item.kind) !== -1;
          })
          .map(function(item) {
            return {
              name: item.label,
              value: item.deviceId,
              kind: item.kind,
            };
          });
        var videos = [];
        var audios = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if ("videoinput" == item.kind) {
            var name = item.label;
            var value = item.deviceId;
            if (!name) {
              name = "camera-" + videos.length;
            }
            videos.push({
              name: name,
              value: value,
              kind: item.kind,
            });
          }
          if ("audioinput" == item.kind) {
            var name = item.label;
            var value = item.deviceId;
            if (!name) {
              name = "microphone-" + audios.length;
            }
            audios.push({
              name: name,
              value: value,
              kind: item.kind,
            });
          }
        }
        next({ videos: videos, audios: audios });
      });
    },
    handleEvents({ state, dispatch }) {
      // Occurs when an error message is reported and requires error handling.
      state.rtc.client.on("error", (err) => {
        console.log(err);
      });
      // Occurs when the peer user leaves the channel; for example, the peer user calls Client.leave.
      state.rtc.client.on("peer-leave", function(evt) {
        var id = evt.uid;
        console.log("id", evt);
        let streams = state.rtc.remoteStreams.filter((e) => id !== e.getId());
        let peerStream = state.rtc.remoteStreams.find((e) => id === e.getId());
        if (peerStream && peerStream.isPlaying()) {
          peerStream.stop();
        }
        state.rtc.remoteStreams = streams;
        if (id !== state.rtc.params.uid) {
          dispatch("removeView", id);
        }
        dispatch("Toast", "peer leave");
        console.log("peer-leave", id);
      });
      // Occurs when the local stream is published.
      state.rtc.client.on("stream-published", function(evt) {
        dispatch("Toast", "stream published success");
        console.log("stream-published");
      });
      // Occurs when the remote stream is added.
      state.rtc.client.on("stream-added", function(evt) {
        var remoteStream = evt.stream;
        var id = remoteStream.getId();
        dispatch("Toast", "stream-added uid: " + id);
        if (id !== state.rtc.params.uid) {
          state.rtc.client.subscribe(remoteStream, function(err) {
            console.log("stream subscribe failed", err);
          });
        }
        console.log("stream-added remote-uid: ", id);
      });
      // Occurs when a user subscribes to a remote stream.
      state.rtc.client.on("stream-subscribed", function(evt) {
        console.log("masuk handle event");
        var remoteStream = evt.stream;
        var id = remoteStream.getId();
        state.rtc.remoteStreams.push(remoteStream);
        console.log(id, "masuk id =<<<<<<<<<<<<<");
        dispatch("addView", id);
        remoteStream.play("remote_video_" + id);
        dispatch("Toast", "stream-subscribed remote-uid: " + id);
        console.log("stream-subscribed remote-uid: ", id);
      });
      // Occurs when the remote stream is removed; for example, a peer user calls Client.unpublish.
      state.rtc.client.on("stream-removed", function(evt) {
        var remoteStream = evt.stream;
        var id = remoteStream.getId();
        dispatch("Toast", "stream-removed uid: " + id);
        if (remoteStream.isPlaying()) {
          remoteStream.stop();
        }
        state.rtc.remoteStreams = state.rtc.remoteStreams.filter(function(
          stream
        ) {
          return stream.getId() !== id;
        });
        dispatch("removeView", id);
        console.log("stream-removed remote-uid: ", id);
      });
      state.rtc.client.on("onTokenPrivilegeWillExpire", function() {
        // After requesting a new token
        // state.rtc.client.renewToken(token);
        dispatch("Toast", "onTokenPrivilegeWillExpire");
        console.log("onTokenPrivilegeWillExpire");
      });
      state.rtc.client.on("onTokenPrivilegeDidExpire", function() {
        // After requesting a new token
        // client.renewToken(token);
        dispatch("Toast", "onTokenPrivilegeDidExpire");
        console.log("onTokenPrivilegeDidExpire");
      });
    },

    join({ state, dispatch }) {
      if (state.rtc.joined) {
        dispatch("Toast", "Your already joined");
        return;
      }

      /**
       * A class defining the properties of the config parameter in the createClient method.
       * Note:
       *    Ensure that you do not leave mode and codec as empty.
       *    Ensure that you set these properties before calling Client.join.
       *  You could find more detail here. https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html
       **/
      state.rtc.client = AgoraRTC.createClient({
        mode: state.option.mode,
        codec: state.option.codec,
      });

      state.rtc.params = state.option;

      // handle AgoraRTC client event
      dispatch("handleEvents");

      // init client
      state.rtc.client.init(
        state.option.appID,
        function() {
          console.log("init success");

          /**
           * Joins an AgoraRTC Channel
           * This method joins an AgoraRTC channel.
           * Parameters
           * tokenOrKey: string | null
           *    Low security requirements: Pass null as the parameter value.
           *    High security requirements: Pass the string of the Token or Channel Key as the parameter value. See Use Security Keys for details.
           *  channel: string
           *    A string that provides a unique channel name for the Agora session. The length must be within 64 bytes. Supported character scopes:
           *    26 lowercase English letters a-z
           *    26 uppercase English letters A-Z
           *    10 numbers 0-9
           *    Space
           *    "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","
           *  uid: number | null
           *    The user ID, an integer. Ensure this ID is unique. If you set the uid to null, the server assigns one and returns it in the onSuccess callback.
           *   Note:
           *      All users in the same channel should have the same type (number or string) of uid.
           *      If you use a number as the user ID, it should be a 32-bit unsigned integer with a value ranging from 0 to (232-1).
           **/
          state.rtc.client.join(
            state.option.token ? state.option.token : null,
            state.option.channel,
            state.option.uid ? +state.option.uid : null,
            function(uid) {
              dispatch(
                "Toast",
                "join channel: " +
                  state.option.channel +
                  " success, uid: " +
                  uid
              );
              console.log(
                "join channel: " +
                  state.option.channel +
                  " success, uid: " +
                  uid
              );
              state.rtc.joined = true;

              state.rtc.params.uid = uid;

              // create local stream
              state.rtc.localStream = AgoraRTC.createStream({
                streamID: state.rtc.params.uid,
                audio: true,
                video: true,
                screen: false,
                microphoneId: state.option.microphoneId,
                cameraId: state.option.cameraId,
              });

              // initialize local stream. Callback function executed after intitialization is done
              state.rtc.localStream.init(
                function() {
                  console.log("init local stream success");
                  // play stream with html element id "local_stream"
                  state.rtc.localStream.play("local_stream");

                  // publish local stream
                  dispatch("publish", state.rtc);
                },
                function(err) {
                  dispatch(
                    "Toast",
                    "stream init failed, please open console see more detail"
                  );
                  console.error("init local stream failed ", err);
                }
              );
            },
            function(err) {
              dispatch(
                "Toast",
                "client join failed, please open console see more detail"
              );
              console.error("client join failed", err);
            }
          );
        },
        (err) => {
          dispatch(
            "Toast",
            "client init failed, please open console see more detail"
          );
          console.error(err);
        }
      );
    },
    publish({ state, dispatch }) {
      if (!state.rtc.client) {
        dispatch("Toast", "Please Join Room First");
        return;
      }
      if (state.rtc.published) {
        dispatch("Toast", "Your already published");
        return;
      }
      var oldState = state.rtc.published;

      // publish localStream
      state.rtc.client.publish(state.rtc.localStream, function(err) {
        state.rtc.published = oldState;
        console.log("publish failed");
        dispatch("Toast", "publish failed");
        console.error(err);
      });
      dispatch("Toast", "publish");
      state.rtc.published = true;
    },

    unpublish({ state, dispatch }) {
      if (!state.rtc.client) {
        dispatch("Toast", "Please Join Room First");
        return;
      }
      if (!state.rtc.published) {
        dispatch("Toast", "Your didn't publish");
        return;
      }
      var oldState = state.rtc.published;
      state.rtc.client.unpublish(state.rtc.localStream, function(err) {
        state.rtc.published = oldState;
        console.log("unpublish failed");
        dispatch("Toast", "unpublish failed");
        console.error(err);
      });
      dispatch("Toast", "unpublish");
      state.rtc.published = false;
    },
    leave({ state, dispatch }) {
      if (!state.rtc.client) {
        dispatch("Toast", "Please Join First!");
        return;
      }
      if (!state.rtc.joined) {
        dispatch("Toast", "You are not in channel");
        return;
      }
      /**
       * Leaves an AgoraRTC Channel
       * This method enables a user to leave a channel.
       **/
      state.rtc.client.leave(
        function() {
          // stop stream
          if (state.rtc.localStream.isPlaying()) {
            state.rtc.localStream.stop();
          }
          // close stream
          state.rtc.localStream.close();
          for (let i = 0; i < state.rtc.remoteStreams.length; i++) {
            var stream = state.rtc.remoteStreams.shift();
            var id = stream.getId();
            if (stream.isPlaying()) {
              stream.stop();
            }
            dispatch("removeView", id);
          }
          state.rtc.localStream = null;
          state.rtc.remoteStreams = [];
          state.rtc.client = null;
          console.log("client leaves channel success");
          state.rtc.published = false;
          state.rtc.joined = false;
          dispatch("Toast", "leave success");
        },
        function(err) {
          console.log("channel leave failed");
          dispatch("Toast", "leave success");
          console.error(err);
        }
      );
    },
  },
};

/*

#remote_video_panel_xxx .video-view
  > remote_video_xxx  width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;
    > videoxxxx width: 100%; height: 100%; position: absolute; object-fit: cover;
    > audio4207947882
*/
