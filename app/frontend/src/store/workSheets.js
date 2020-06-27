import Axios from "axios";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

export default {
  namespaced: true,
  state: {
    sheets: [],
  },
  mutations: {
    SET_SHEETS(state, payload) {
      this.sheets = payload;
    },
    INPUT_ANSWER(state, payload) {
      /* {
        indexArray,
        answer,
        code: code == `verb-2` ? 2 : 3,
        idQuestion
      }*/
      console.log(payload)
      let sheetsTemp = JSON.stringify(state.sheets);
      sheetsTemp = JSON.parse(sheetsTemp);
      console.log(sheetsTemp);
      sheetsTemp[payload.indexArray].questions[payload.code] = payload.answer;
      // sheetsTemp[payload.indexArray].idKey = Math.random()
      state.sheets = sheetsTemp
    },
  },
  actions: {
    getWorkSheets({ state, commit }, id) {
      if (id > 6) {
        return;
      }
      Axios.get(`/classrooms/2/work_groups/2/worksheets/${id}.json`)
        .then(({ data }) => {
          const sheets = state.sheets;
          // console.log(JSON.parse(data.display_content));

          // console.log(JSON.parse(data.correct_content));
          const questions = JSON.parse(data.display_content);
          console.log(questions);
          const answers = JSON.parse(data.correct_content);
          const sheetsTemp = [
            {
              questions: questions[1],
              answers: answers[1],
              id: data.id,
              idKey: Math.random()
            },
            {
              questions: questions[2],
              answers: answers[2],
              id: data.id,
              idKey: Math.random()
            },
          ];
          // console.log(sheet);
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
  },
};

// [
//   sheet: {
//     questions: [
//       ["hashiru", "run", false, false],
//       ["iu", "say", false, false]
//     ],
//     answers: [
//        ["hashiru", "run", "ran", "run"]
//        ["iu", "say", "said", "said"]
//     ]
//   }
// ]
