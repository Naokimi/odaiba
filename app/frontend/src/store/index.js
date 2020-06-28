import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import Router from "../router";

import classRooms from "./classRooms";
import workGroups from "./workGroups";
import workSheets from "./workSheets";
import VideoCall from "./VideoCall";
import AudioCall from "./AudioCall";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: "",
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = {
        userId: payload.id,
        name: payload.name,
      };
    },
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      try {
        // const { data } = await Axios.post("/auth/login", payload);
        const data = {
          id: 1,
          name: "dzakki",
        };
        localStorage.setItem("odaiba.token", "token");
        localStorage.setItem("odaiba.userId", 1);
        localStorage.setItem("odaiba.name", "dzakki");
        localStorage.setItem("odaiba.role", payload.role);
        commit("SET_ISLOGIN", data);
        payload.cb();
        // Router.replace("/");
      } catch ({ response }) {
        console.log(response);
        commit("SET_ERRORS", response.data.message);
      }
    },
  },
  modules: {
    classRooms,
    workGroups,
    workSheets,
    VideoCall,
    AudioCall,
  },
});
