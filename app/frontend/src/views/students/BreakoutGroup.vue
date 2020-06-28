<template>
  <div>
    <Navbar />

    <div class="flex p-6">
      <a href="#" @click.prevent="$router.go(-1)">
        <div
          class="flex-none h-12 w-12 text-center bg-white hover:bg-gray-200 p-3 m-2 rounded-full"
        >
          <i class="fas fa-reply text-gray-700"></i>
        </div>
      </a>

      <div class="flex-initial w-full text-gray-700 text-center m-2">
        <div class="flex mb-4">
          <div class="w-8/12 px-4">
            <div class="bg-white p-4 rounded-lg">
              <div class="bg-gray-200 p-4 rounded">
                <table class="table-fixed bg-white">
                  <thead>
                    <tr>
                      <th class="border w-1/12 px-4 py-2"></th>
                      <th class="border w-2/12 px-4 py-2">日本語</th>
                      <th class="border w-3/12 px-4 py-2">原形</th>
                      <th class="border w-3/12 px-4 py-2">過去形</th>
                      <th class="border w-3/12 px-4 py-2">過去分詞形</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm">
                    <tr class="font-medium">
                      <td class="border px-4 py-2">例</td>
                      <td class="border px-4 py-2">始める</td>
                      <td class="border px-4 py-2">begin</td>
                      <td class="border px-4 py-2">began</td>
                      <td class="border px-4 py-2">begun</td>
                    </tr>
                    <tr v-for="(sheet, i) in sheets" :key="sheet.idKey">
                      <td class="border px-4 py-4">{{ i + 1 }}</td>
                      <td class="border px-4 py-4">{{ sheet.questions[0] }}</td>
                      <td class="border px-4 py-4">{{ sheet.questions[1] }}</td>
                      <td class="border px-4 py-4">
                        <InputAnswer
                          :code="`verb-2`"
                          :idQuestion="sheet.id"
                          :indexArray="i"
                          :answerTemp="sheet.questions[2]"
                        />
                      </td>
                      <td class="border px-4 py-4">
                        <InputAnswer
                          :code="`verb-3`"
                          :idQuestion="sheet.id"
                          :indexArray="i"
                          :answerTemp="sheet.questions[3]"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  @click="submit = true"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                >
                  {{ submit ? "Submitted!" : "Submit" }}
                </button>
              </div>
            </div>
          </div>
          <div class="w-4/12 px-4">
            <div
              class="block bg-orange-500 p-3 rounded-lg mb-6"
              style="background-color: #F98436"
            >
              <div class="font-semibold text-xl text-white mb-2">
                <h4>Timer</h4>
              </div>
              <div class="bg-white p-4 rounded-lg flex">
                <div class="inline w-1/2">
                  <TimerCountdown :duration="group.session_time" />
                  <!-- <p class="block font-semibold text-3xl">15:00</p> -->
                  <p class="block text-gray-500">Group Session</p>
                </div>
                <div class="inline w-1/2">
                  <TimerCountdown :duration="group.turn_time" />
                  <!-- <p class="block font-semibold text-3xl">05:00</p> -->
                  <p class="block text-gray-500">{{ turn }} Turn</p>
                </div>
              </div>
            </div>

            <div class="block bg-white p-3 rounded-lg mb-8">
              <div class="font-semibold text-xl mb-3">
                <h4 class="mb-2">Members</h4>
                <hr class="border" />
              </div>
              <div class="bg-white rounded-lg">
                <div
                  class="block w-full bg-gray-200 px-4 py-3 text-left items-center mb-2"
                  v-for="member in members"
                  :key="member.id"
                >
                  <img
                    class="w-8 mr-4 bg-white rounded-full inline"
                    :src="require('../../assets/student-avatar.png')"
                    alt="student-avatar"
                  />
                  <p class="text-lg inline">{{ member.name }}</p>
                  <p>{{ member.join ? "joiner" : "" }}</p>
                </div>
              </div>
            </div>

            <div class="block flex flex-wrap">
              <a class="w-1/3 ml-auto" href="#">
                <div
                  class="flex-none h-20 w-20 text-center bg-white hover:bg-orange-500 p-6 ml-6 rounded-full"
                >
                  <i class="fas fa-hand-paper fa-2x text-gray-700"></i>
                </div>
              </a>
              <button
                class="w-1/3 mr-auto"
                @click="leaveAudio"
                v-if="audioStatus"
              >
                <div
                  class="flex-none h-20 w-20 text-center bg-white hover:bg-orange-500 py-6 px-5 ml-6 rounded-full"
                >
                  <i class="fas fa-microphone fa-2x text-gray-700"></i>
                </div>
              </button>
              <button
                class="w-1/3 mr-auto"
                @click="joinAudio"
                v-if="!audioStatus"
              >
                <div
                  class="flex-none h-20 w-20 text-center bg-white hover:bg-orange-500 py-6 px-5 ml-6 rounded-full"
                >
                  <i class="fas fa-microphone-slash fa-2x text-gray-700"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AaudioBreakoutRoom />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AaudioBreakoutRoom from "@/components/AaudioBreakoutRoom.vue";
import InputAnswer from "@/components/InputAnswer.vue";
import TimerCountdown from "@/components/TimerCountdown.vue";

import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "BreakoutGroup",
  data() {
    return {
      audioStatus: false,
      submit: false,
    };
  },
  components: {
    Navbar,
    AaudioBreakoutRoom,
    InputAnswer,
    TimerCountdown,
  },
  computed: {
    ...mapState("workSheets", ["sheets", "count", "group"]),
    members() {
      if (!this.group) return [];
      const membersTemp = [];
      this.group.users.forEach((user) => {
        if (!user.isTeacher) {
          membersTemp.push(user);
        }
      });
      return membersTemp;
    },
    turn() {
      if (!this.group) return "";
      let turnTemp;
      this.group.users.forEach((user) => {
        if (user.turn) {
          turnTemp = user.name;
        }
      });
      return turnTemp;
    },
  },
  methods: {
    ...mapActions("workSheets", [
      "getWorkSheets",
      "UpdateAnswer",
      "NewQuestion",
      "UpdateQuestion",
      "GetGroups",
      "ListenGroups",
    ]),
    ...mapActions("AudioCall", ["join", "leave", "getDevices"]),
    ...mapMutations("workSheets", [
      "SET_GROUPID",
      "SET_SHEETS",
      "CLEAR_SHEETS",
    ]),
    leaveAudio() {
      console.log("==");
      this.audioStatus = false;
      this.leave();
    },
    joinAudio() {
      this.audioStatus = true;
      this.join();
    },
    answerQ() {
      //answer question
    },
    newQ() {
      // new question
      this.NewQuestion();
    },
  },
  destroy() {
    this.CLEAR_SHEETS();
  },
  created() {
    this.SET_GROUPID(this.$route.params.work_group_id);
    this.CLEAR_SHEETS();
    this.ListenGroups();
    this.getWorkSheets();
    this.UpdateAnswer();
    this.UpdateQuestion(); // get new qeustion from api
    this.GetGroups();
  },
  watch: {
    $route() {
      this.SET_GROUPID(this.$route.params.work_group_id);
    },
  },
};
</script>

<style lang="css" scoped>
.hide {
  display: none;
}
</style>
