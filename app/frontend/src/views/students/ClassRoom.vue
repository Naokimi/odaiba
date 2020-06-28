<template>
  <div>
    <Navbar />
    <div class="flex w-full text-gray-700 text-center m-2 p-6 px-16">
      <div class="w-8/12 px-4">
        <div class="bg-white p-6 rounded-lg">
          <div class="my-classrooms w-full mb-6">
            <div class="flex justify-between items-center mb-4">
              <div
                class="w-64 bg-gray-900 rounded-full text-white px-8 py-2 text-lg font-semibold"
              >
                English
              </div>
              <hr class="w-full border border-gray-300" />
            </div>
            <div class="flex flex-wrap -mx-2 ml-2 mb-3">
              <button
                v-if="!statusJoin"
                class="inline bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-none text-white text-sm font-bold py-2 px-6 mt-2 rounded items-center"
                @click="joinRoom"
              >
                <span>Join video</span>
              </button>
              <button
                v-if="statusJoin"
                class="ml-3 inline bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-none text-white text-sm font-bold py-2 px-6 mt-2 rounded items-center"
                @click="leaveRoom"
              >
                <span>Leave video</span>
              </button>
            </div>
            <div class="flex flex-wrap -mx-2" id="video">
              <div class="w-1/3 px-2 mb-4">
                <div class="flex">
                  <div
                    class="inline h-auto w-2 text-lg rounded-lg rounded-r-none bg-blue-400"
                  ></div>
                  <div
                    class="inline w-full bg-gray-100 p-2 text-left rounded hover:shadow-md"
                  >
                    <div class="px-3 py-2">
                      <div id="local_stream" class="video-placeholder"></div>
                      <div
                        id="local_video_info"
                        class="video-profile hide"
                      ></div>
                      <div
                        id="video_autoplay_local"
                        class="autoplay-fallback hide"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-4/12 px-4">
        <div
          class="block bg-orange-500 p-3 rounded-lg mb-6"
          style="background-color: #F98436"
        >
          <div class="font-semibold text-xl text-white mb-2">
            <h4>Your Group Session</h4>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <div class="block w-full flex justify-between mb-2 text-xl">
              <p class="inline font-semibold">English</p>
              <p class="inline font-semibold">10:30am</p>
            </div>
            <div class="block w-full flex justify-between">
              <button
                class="inline bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline-none text-white text-sm font-bold py-2 px-6 mt-2 rounded items-center"
                @click.prevent="$router.push(`/classrooms/1/work_groups/1`)"
              >
                <span>Join Group</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AgoraRTC from "agora-rtc-sdk";

import { mapActions, mapState } from "vuex";

export default {
  name: "ClassRoom",
  components: {
    Navbar,
  },
  data() {
    return {
      statusJoin: false,
    };
  },
  computed: {
    ...mapState("VideoCall", ["option"]),
  },
  methods: {
    ...mapActions("VideoCall", ["getDevices", "join", "leave"]),
    joinRoom() {
      this.statusJoin = true;
      this.join();
    },
    leaveRoom() {
      this.statusJoin = false;
      this.leave();
    },
  },
  mounted() {
    M.AutoInit();
  },
  created() {
    console.log(
      "agora sdk version: " +
        AgoraRTC.VERSION +
        " compatible: " +
        AgoraRTC.checkSystemRequirements()
    );
    // console.log(resolutions);
    console.log();
    this.getDevices((devices) => {
      this.option.cameraId = devices.videos[0].value;
      console.log(this.option);
    });
  },
};
</script>

<style lang="css" scoped>
/*@import "../../assets/common.css";*/

.video-placeholder {
  position: relative;
  height: 200px;
}

.video-placeholder div {
}

/*.video-placeholder div video {
  position: relative !important;
}*/

video {
  position: relative;
}
#local_stream {
  position: relative;
}

#local_video_info {
  position: absolute;
}

.video-view {
  position: relative;
}

.video-profile {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 2;
  color: #fff;
  opacity: 0.9;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 10px;
}

.video-grid {
  display: flex;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
}

.autoplay-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  /*position: absolute;*/
  width: 100%;
  height: 100%;
  top: 0;
  display: block;
  cursor: pointer;
}
.autoplay-fallback::after {
  font-size: 1.5rem;
  opacity: 0.9;
  text-shadow: black 0.1em 0.1em 0.2em;
  display: block;
  color: #fff;
}
</style>
