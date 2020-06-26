import Vue from "vue";
import Axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Axios.defaults.baseURL = "http://localhost:3000";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
