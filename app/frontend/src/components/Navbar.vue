<template>
  <div>
    <header>
      <nav
        class="flex items-center justify-between flex-wrap bg-yellow-400 px-4 py-2"
        style="background-color: #f7be2a"
      >
        <router-link to="/">
          <div class="flex items-center flex-shrink-0 text-white mr-6 w-32">
            <img :src="require('../assets/odaiba-logo-icon-inverted-2.svg')" />
          </div>
        </router-link>

        <div class="flex items-center flex-shrink-0">
          <div>
            <a
              href="#"
              class="inline-flex items-center font-semibold text-xl px-4 py-2 leading-none text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              <img
                v-if="role == `student`"
                class="w-8 mr-4 bg-white rounded-full"
                :src="require(`../assets/student-avatar.png`)"
                alt="student-avatar"
              />
              <img
                v-if="role == `teacher`"
                class="w-8 mr-4 bg-white rounded-full"
                :src="require(`../assets/teacher-avatar.png`)"
                alt="student-avatar"
              />
              {{ name }}</a
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
// import logo from "odaiba-logo-icon-inverted-2";

export default {
  name: "Navbar",

  data() {
    return {
      name: "",
      role: "",
    };
  },
  created() {
    this.name = localStorage.getItem("odaiba.name");
    if (localStorage.getItem("odaiba.role") == "student") {
      this.role = "student";
    } else {
      this.role = "teacher";
    }
  },
};
</script>

<style lang="css" scoped></style>
