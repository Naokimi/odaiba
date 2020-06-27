<template>
  <input
    class="appearance-none bg-transparent border-b border-b-2 border-gray-400 focus:border-b-2 focus:border-orange-500 w-full text-center text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    type="text"
    placeholder="Write your answer"
    aria-label="Answer"
    v-model="answer"
    @change="answerQ"
  />
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "InputAnswer",
  props: ["code", "idQuestion", "indexArray", "answerTemp"],
  // code is verb
  // index of arrray
  data() {
    return {
      // answer: "",
      ans: ""
    };
  },
  computed: {
    answer: {
      get() {
        return this.ans || (this.answerTemp ? this.answerTemp: "") 
      },
      set(val) {
        this.ans = val
      }
    }
  },
  methods: {
    ...mapActions("workSheets", ["AnswerQuestion"]),
    answerQ() {
      // answer question
      console.log(this.answer);
      this.AnswerQuestion({
        indexArray: this.indexArray,
        answer: this.answer,
        code: this.code == `verb-2` ? 2 : 3,
        idQuestion: this.idQuestion,
      });
      /* {
        
      }*/
    },
  },
};
</script>

<style lang="css" scoped></style>
