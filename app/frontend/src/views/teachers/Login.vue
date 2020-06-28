<template>
  <!-- <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click="login">Login</button>
  </div> -->
  <div class="flex">
    <div
      class="w-1/2 h-screen flex items-stretch py-20 text-white bg-yellow-400"
      style="background-color: #f7be2a"
    >
      <img
        class="flex-1 self-center p-40"
        :src="require('../../assets/odaiba-vertical.svg')"
        alt="logo"
      />
    </div>

    <div
      class="w-1/2 h-screen flex items-stretch py-20 text-orange-500 bg-white"
      style="background-color: #F4F1EA"
    >
      <div class="container self-center mx-auto px-20">
        <h2 class="py-4 text-5xl text-center font-bold mb-2 text-orange-500">
          Teacher Login
        </h2>
        <form @submit.prevent="login">
          <div class="container py-10 px-10 bg-white rounded-lg">
            <div class="my-5 -mt-1 username-input flex w-full">
              <div
                class="username-icon w-1/6 py-4 px-4 text-lg rounded-lg rounded-r-none text-center bg-gray-400"
              >
                <i class="fas fa-user text-gray-600"></i>
              </div>
              <input
                class="w-5/6 text-lg bg-white focus:outline-none focus:shadow-outline-none rounded-lg rounded-l-none py-4 px-4 appearance-none leading-normal"
                type="text"
                placeholder="username or email address"
                style="background-color: #F4F1EA"
                v-model="username"
              />
            </div>

            <div class="my-5 -mt-1 username-input flex w-full">
              <div
                class="username-icon w-1/6 py-4 px-4 text-lg rounded-lg rounded-r-none text-center bg-gray-400"
              >
                <i class="fas fa-key text-gray-600"></i>
              </div>
              <input
                class="w-5/6 text-lg bg-white focus:outline-none focus:shadow-outline-none rounded-lg rounded-l-none py-4 px-4 appearance-none leading-normal"
                type="password"
                placeholder="password"
                style="background-color: #F4F1EA"
                v-model="password"
              />
            </div>

            <router-link
              to="/"
              class="my-6 block text-lg text-orange-500 hover:text-orange-400 text-right"
              href="#"
              >Login as Student</router-link
            >
            <button
              class="my-5 -mb-1 block text-center bg-teal-400 hover:bg-teal-300 text-white font-bold py-4 px-4 border-b-4 border-teal-500 hover:border-teal-400 rounded-full uppercase tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginTeacher",

  data() {
    return {
      username: "paulo",
      password: "paulo",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
        role: "teacher",
        cb: () => {
          this.$router.replace("/classrooms/1/work_groups");
        },
      });
    },
  },
};
</script>

<style lang="css" scoped></style>
