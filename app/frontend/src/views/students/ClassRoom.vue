<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col">
        <button
          class="btn btn-raised btn-primary waves-effect waves-light"
          id="join"
          @click="join"
        >
          JOIN
        </button>
        <button
          class="btn btn-raised btn-primary waves-effect waves-light"
          id="leave"
          @click="leave"
        >
          leave
        </button>
        <!--         <button
          class="btn btn-raised btn-primary waves-effect waves-light"
          id="join"
          @click="leave"
        >
          Leave
        </button> -->
      </div>
    </div>
    <div class="agora-theme">
      <div class="video-grid" id="video">
        <div class="video-view">
          <div id="local_stream" class="video-placeholder"></div>
          <div id="local_video_info" class="video-profile hide"></div>
          <div id="video_autoplay_local" class="autoplay-fallback hide"></div>
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
    return {};
  },
  computed: {
    ...mapState("VideoCall", ["option"]),
  },
  methods: {
    ...mapActions("VideoCall", ["getDevices", "join", "leave"]),
    joinRoom() {
      this.join();
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

.agora-theme #local_stream {
  position: relative;
}

.agora-theme #local_video_info {
  position: absolute;
}

.agora-theme .video-view {
  position: relative;
}

.agora-theme .video-view,
.agora-theme .video-placeholder,
.agora-theme #local_stream,
.agora-theme #local_video_info {
  width: 480px;
  height: 320px;
}

.agora-theme .video-profile {
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

.agora-theme .video-grid {
  display: flex;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
}

.agora-theme .autoplay-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: block;
  cursor: pointer;
}
.agora-theme .autoplay-fallback::after {
  content: "click here to play";
  font-size: 1.5rem;
  opacity: 0.9;
  text-shadow: black 0.1em 0.1em 0.2em;
  display: block;
  color: #fff;
}
</style>
