<template>
  <div>
    <Navbar />
    <br />
    <br />
    <div class="m-3">
      <router-link to="/classrooms/1/work_groups/">Go to groups</router-link>
      <br />
      <router-link to="/students/classroom/1">Go to classroom</router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
