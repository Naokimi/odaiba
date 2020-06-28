<template>
  <p class="block font-semibold text-3xl">{{ minutes }}: {{ seconds }}</p>
</template>

<script>
export default {
  name: "TimerCountdown",
  props: ["duration"],
  data() {
    return {
      minutes: null,
      seconds: null,
    };
  },
  methods: {
    startTimer(duration, display) {
      var timer = this.duration;
      let interval = setInterval(() => {
        this.minutes = parseInt(timer / 60, 10);
        this.seconds = parseInt(timer % 60, 10);

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        if (--timer < 0) {
          timer = this.duration;
          // clearInterval(interval);
        }
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style lang="css" scoped></style>
