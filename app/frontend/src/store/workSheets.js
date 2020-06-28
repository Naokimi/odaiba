import Axios from "axios";
import io from "socket.io-client";
import { socket_url } from "../url";
const socket = io(socket_url);

export default {
  namespaced: true,
  state: {
    sheets: [],
    count: 1,
    group: {
      id: 1,
      name: "....",
      video_call_code: "...",
      turn_time: 60 * 5,
      session_time: 60 * 15,
      status: "onprogress",
      users: [],
      classroom_id: 1,
      score: 0,
      answered: 0,
      sheets: [],
    },
    groupid: null,
  },
  mutations: {
    SET_GROUPID(state, payload) {
      state.groupid = payload;
    },
    SET_SHEETS(state, payload) {
      this.sheets = payload;
      socket.emit("updateSheet", {
        sheets: state.sheets,
        groupid: state.groupid,
      });
      state.count++;
    },
    CLEAR_SHEETS(state, payload) {
      state.sheets = [];
      state.count = 1;
      socket.emit("updateSheet", {
        sheets: [],
        groupid: state.groupid,
      });
    },
    INPUT_ANSWER(state, payload) {
      /* {
        indexArray,
        answer,
        code: code == `verb-2` ? 2 : 3,
        idQuestion
      }*/
      console.log(payload);
      let sheetsTemp = JSON.stringify(state.sheets);
      sheetsTemp = JSON.parse(sheetsTemp);
      console.log(sheetsTemp);
      sheetsTemp[payload.indexArray].questions[payload.code] = payload.answer;
      // sheetsTemp[payload.indexArray].idKey = Math.random()
      state.sheets = sheetsTemp;
      socket.emit("updateSheet", {
        sheets: state.sheets,
        groupid: state.groupid,
      });
    },
    SET_GROUP(state, payload) {
      state.group = payload;
    },
  },
  actions: {
    getWorkSheets({ state, commit }) {
      if (state.count > 5) {
        return;
      }
      Axios.get(`/classrooms/2/work_groups/2/worksheets/${state.count}.json`)
        .then(({ data }) => {
          const sheets = state.sheets;
          // console.log(JSON.parse(data.display_content));

          // console.log(JSON.parse(data.correct_content));
          const questions = JSON.parse(data.display_content);
          console.log(questions);
          const answers = JSON.parse(data.correct_content);

          const sheetsTemp = [
            // {
            //   questions: questions[1],
            //   answers: answers[1],
            //   id: data.id,
            //   idKey: Math.random(),
            // },
            // {
            //   questions: questions[2],
            //   answers: answers[2],
            //   id: data.id,
            //   idKey: Math.random(),
            // },
          ];

          // console.log(questions);
          for (var i = 1; i <= 10; i++) {
            sheetsTemp.push({
              questions: questions[i],
              answers: answers[i],
              id: data.id,
              idKey: Math.random(),
            });
          }
          console.log(sheetsTemp);
          console.log(questions);
          // questions.forEach((qs) => {
          //   sheetsTemp.push({
          //     questions: questions[1],
          //     answers: answers[1],
          //     id: data.id,
          //     idKey: Math.random(),
          //   });
          // });
          // console.log(sheet);
          // if () {}
          sheets.push(...sheetsTemp);
          console.log(sheets);
          commit("SET_SHEETS", sheets);
        })
        .catch((err) => console.log(err));
    },
    AnswerQuestion({ commit, state }, payload) {
      commit("INPUT_ANSWER", payload);
      console.log(payload);
      socket.emit("answerQ", payload);
    },
    UpdateAnswer({ commit }) {
      socket.on("answerQ", function(response) {
        console.log(response);
        commit("INPUT_ANSWER", response);
      });
    },
    NewQuestion({ dispatch }) {
      dispatch("getWorkSheets");
      socket.emit("newQ");
    },
    UpdateQuestion({ dispatch }) {
      socket.on("newQ", function() {
        dispatch("getWorkSheets");
      });
    },
    GetGroups() {
      socket.emit("getGroups", localStorage.getItem("odaiba.name"));
    },
    ListenGroups({ commit, state }) {
      socket.on(localStorage.getItem("odaiba.name"), function(response) {
        console.log(response);

        const indexGroup = response.findIndex(function(r) {
          return r.id === Number(state.groupid);
        });
        console.log(indexGroup);
        commit("SET_GROUP", response[indexGroup]);
      });
    },
  },
};

/* [
//   sheet: {
//     questions: [
//       ["hashiru", "run", false, false],
//       ["iu", "say", false, false]
//     ],
//     answered: {
         1: false,
         2: false,
         3: false,
         4: false,
//     }
//     answers: [
//        ["hashiru", "run", "ran", "run"]
//        ["iu", "say", "said", "said"]
//     ]
//   }
 ]*/
