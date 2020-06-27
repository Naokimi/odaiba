import AgoraRTC from "agora-rtc-sdk";
export default {
  namespaced: true,
  state: {
    rtc: {
      client: null,
      joined: false,
      published: false,
      localStream: null,
      remoteStreams: [],
      params: {},
    },
    option: {
      appID: "e11c6335df4e414f9ccaf06641ec18f4",
      channel: "1",
      uid: null,
      token:
        "006e11c6335df4e414f9ccaf06641ec18f4IACBfq8QcnkfTtsNpOVfSPg6RK3+VY65JybOtjj1teL4Zrfv3IMAAAAAEACzAjOTFxb4XgEAAQAXFvhe",
    },
  },
  mutations: {},
  actions: {
    addView(_, payload) {
      console.log(payload, "====================");
      // const { id, show } = payload;
      if (!$("#" + payload)[0]) {
        $("<div/>", {
          id: "remote_video_panel_" + payload,
          class: "video-view",
        }).appendTo("#video");

        $("<div/>", {
          id: "remote_video_" + payload,
          class: "video-placeholder",
        }).appendTo("#remote_video_panel_" + payload);

        $("<div/>", {
          id: "remote_video_info_" + payload,
          class: "video-profile " + (payload.show ? "" : "hide"),
        }).appendTo("#remote_video_panel_" + payload);

        $("<div/>", {
          id: "video_autoplay_" + payload,
          class: "autoplay-fallback hide",
        }).appendTo("#remote_video_panel_" + payload);
      }
    },
    removeView(_, id) {
      if ($("#remote_video_panel_" + id)[0]) {
        $("#remote_video_panel_" + id).remove();
      }
    },
    join({ state, dispatch }) {
      state.rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
      state.rtc.client.init(
        state.option.appID,
        function() {
          console.log("init success");
          rtc.client.join(
            state.option.token,
            state.option.channel,
            state.option.uid,
            function(uid) {
              console.log(
                "join channel: " +
                  state.option.channel +
                  " success, uid: " +
                  uid
              );
              state.rtc.params.uid = uid;
              state.rtc.localStream = AgoraRTC.createStream({
                streamID: state.rtc.params.uid,
                audio: true,
                video: false,
                screen: false,
              });

              state.rtc.localStream.init(
                function() {
                  console.log("init local stream success");
                },
                function(err) {
                  console.error("init local stream failed ", err);
                }
              );
              state.rtc.client.publish(state.rtc.localStream, function(err) {
                console.log("publish failed");
                console.error(err);
              });
            },
            function(err) {
              console.error("client join failed", err);
            }
          );
        },
        (err) => {
          console.error(err);
        }
      );
    },
    handle({ state, dispatch }) {
      state.rtc.client.on("stream-added", function(evt) {
        var remoteStream = evt.stream;
        var id = remoteStream.getId();
        if (id !== state.rtc.params.uid) {
          state.rtc.client.subscribe(remoteStream, function(err) {
            console.log("stream subscribe failed", err);
          });
        }
        console.log("stream-added remote-uid: ", id);
      });

      state.rtc.client.on("stream-subscribed", function(evt) {
        var remoteStream = evt.stream;
        var id = remoteStream.getId();
        // Add a view for the remote stream.
        dispatch("addView", id);
        // addView(id);
        // Play the remote stream.
        remoteStream.play("remote_stream_" + id);
        console.log("stream-subscribed remote-uid: ", id);
      });

      state.rtc.client.on("stream-removed", function(evt) {
        var remoteStream = evt.stream;
        var id = remoteStream.getId();
        // Stop playing the remote stream.
        remoteStream.stop("remote_stream_" + id);
        // Remove the view of the remote stream.
        dispatch("removeView", id);
        // removeView(id);
        console.log("stream-removed remote-uid: ", id);
      });
    },

    leave({ state, dispatch }) {
      state.rtc.client.leave(
        function() {
          // Stop playing the local stream
          state.rtc.localStream.stop();
          // Close the local stream
          state.rtc.localStream.close();
          // Stop playing the remote streams and remove the views
          while (state.rtc.remoteStreams.length > 0) {
            var stream = state.rtc.remoteStreams.shift();
            var id = stream.getId();
            stream.stop();
            dispatch("removeView", id);
            // removeView(id);
          }
          console.log("client leaves channel success");
        },
        function(err) {
          console.log("channel leave failed");
          console.error(err);
        }
      );
    },
  },
};
