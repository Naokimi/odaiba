import io from "socket.io-client";
import { socket_url } from "../url";
const socket = io(socket_url);

export default {
  namespaced: true,
  state: {
    groups: [],
  },
  mutations: {
    SET_GROUPS(state, payload) {
      state.groups = payload;
    },
  },
  actions: {
    getGroups() {
      socket.emit("getGroups", "realtime-groups");
    },
    realtimeGroups({ commit }) {
      socket.on("realtime-groups", function(response) {
        console.log(response);
        commit("SET_GROUPS", response);
      });
    },
  },
};
