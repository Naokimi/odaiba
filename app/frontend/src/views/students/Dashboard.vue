<template>
  <div>
    <Navbar />
    <div>
      <h2>my class room</h2>
      <ul>
        <li>
          bla bla
        </li>
      </ul>
    </div>
    <div>
      <h2>my worksheets</h2>
      <ul>
        <li>
          bla ..
        </li>
      </ul>
    </div>
    <div>
      <h2>next scheduled class</h2>
    </div>
    <div>
      <h2>Events</h2>
      <ul>
        <li>
          bla ..
        </li>
      </ul>
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
