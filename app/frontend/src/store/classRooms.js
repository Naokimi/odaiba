import Axios from "axios";

export default {
  namespaced: true,
  state: {
    classRooms: [],
    classRoom: null,
  },
  mutations: {
    SET_CLASS_ROOMS(state, payload) {
      state.classRooms = payload;
    },
    SET_CLASS_ROOM(state, payload) {
      state.classRoom = payload;
    },
  },
  actions: {
    async getClassRooms({ commit }) {
      try {
        const { data } = Axios.get("/classrooms");
        commit("SET_CLASS_ROOMS", data);
      } catch (e) {
        // statements
        console.log(e);
      }
    },
    async getClassRoom({ commit }, id) {
      try {
        const { data } = Axios.get("/classrooms/" + id);
        commit("SET_CLASS_ROOM", data);
      } catch (e) {
        // statements
        console.log(e);
      }
    },
    async addClassRoom({ commit, dispatch }, payload) {
      try {
        const { data } = Axios.post("/classrooms", payload);
        dispatch("getClassRooms");
      } catch (e) {
        // statements
        console.log(e);
      }
    },
    async updateClassRoom({ commit, dispatch }, id) {
      try {
        const { data } = Axios.put("/classrooms/" + payload.id, payload);
        dispatch("getClassRooms");
      } catch (e) {
        // statements
        console.log(e);
      }
    },
    async deleteClassRoom({ commit, dispatch }, id) {
      try {
        const { data } = Axios.delete("/classrooms/" + payload.id);
        dispatch("getClassRooms");
      } catch (e) {
        // statements
        console.log(e);
      }
    },
  },
};
