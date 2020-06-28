<template>
  <div>
    <div class="video-grid" id="video" style="display:none;">
      <div class="video-view">
        <div id="local_stream" class="video-placeholder"></div>
        <div id="local_video_info" class="video-profile hide"></div>
        <div id="video_autoplay_local" class="autoplay-fallback hide"></div>
      </div>
    </div>
    <button @click="play">play</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AgoraRTC from "agora-rtc-sdk";

export default {
  name: "AaudioBreakoutRoom",
  data() {
    return {};
  },
  computed: {
    ...mapState("AudioCall", ["option"]),
  },
  methods: {
    ...mapActions("AudioCall", ["join", "leave", "getDevices"]),
    play() {
      this.join();
    },
  },
  created() {
    console.log(
      "agora sdk version: " +
        AgoraRTC.VERSION +
        " compatible: " +
        AgoraRTC.checkSystemRequirements()
    );
    this.getDevices((devices) => {
      this.option.cameraId = devices.videos[0].value;
      console.log(this.option);
    });
  },
  mounted() {
    // this.join();
  },
};
</script>

<style lang="css" scoped></style>
