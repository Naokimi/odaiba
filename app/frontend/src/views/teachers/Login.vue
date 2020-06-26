<template>
  <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "LoginTeacher",

  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
        role: "teacher",
      });
    },
  },
};
</script>

<style lang="css" scoped></style>
