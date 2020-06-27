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
        <!--         <button
          class="btn btn-raised btn-primary waves-effect waves-light"
          id="join"
          @click="leave"
        >
          Leave
        </button> -->
      </div>
    </div>
    <div class="video-grid" id="video">
      <div class="video-view">
        <div id="local_stream" class="video-placeholder"></div>
        <div id="local_video_info" class="video-profile hide"></div>
        <div id="video_autoplay_local" class="autoplay-fallback hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AgoraRTC from "agora-rtc-sdk";
import "@/assets/common.css";

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
    ...mapState("Agore", ["option"]),
  },
  methods: {
    ...mapActions("Agore", ["getDevices", "join"]),
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
#local_stream {
  height: 400px;
  width: 400px;
}
</style>
