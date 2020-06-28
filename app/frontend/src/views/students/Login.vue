<template>
  <!-- <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click="login">Login</button>
  </div> -->
  <div
    class="w-full min-h-screen flex flex-wrap items-stretch"
    style="background-color: #F4F1EA"
  >
    <div class="w-full" id="background-wrap relative">
      <div class="x1">
        <div class="cloud"></div>
      </div>

      <div class="x2">
        <div class="cloud"></div>
      </div>

      <div class="x3">
        <div class="cloud"></div>
      </div>

      <div class="x4">
        <div class="cloud"></div>
      </div>

      <div class="x5">
        <div class="cloud"></div>
      </div>
    </div>

    <div class="w-full absolute flex items-stretch py-20 text-orange-500">
      <div class="container self-center mx-auto px-20">
        <h2 class="py-4 text-5xl text-center font-bold mb-2 text-orange-500">
          Student Login
        </h2>
        <form @submit.prevent="login">
          <div
            class="container max-w-md m-auto py-10 px-10 bg-white rounded-lg"
          >
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
              to="/login/teachers"
              class="my-6 block text-lg text-orange-500 hover:text-orange-400 text-right"
              href="#"
              >Login as teacher</router-link
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

    <div
      class="w-full self-end p-6 bg-yellow-400"
      style="background-color: #f7be2a"
    >
      <a href="#">
        <div class="items-center flex-shrink-0 text-white m-auto w-32">
          <img :src="require('../../assets/odaiba-logo-icon-inverted-2.svg')" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginStudent",

  data() {
    return {
      username: "dzakki",
      password: "dzakki",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
        role: "student",
        cb: () => {
          this.$router.replace("/students/dashboard");
        },
      });
    },
  },
};
</script>

<style lang="css" scoped></style>
