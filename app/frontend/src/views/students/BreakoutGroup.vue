<template>
  <div>
    <Navbar />

    <div class="flex p-6">
      <a href="#">
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
                  v-if="count <= 5"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                  @click="newQ"
                >
                  More Tasks
                </button>
                <button
                  v-if="count > 5"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                >
                  Submit!
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
                  <p class="block font-semibold text-3xl">15:00</p>
                  <p class="block text-gray-500">Group Session</p>
                </div>
                <div class="inline w-1/2">
                  <p class="block font-semibold text-3xl">05:00</p>
                  <p class="block text-gray-500">Audrey's Turn</p>
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
                >
                  <img
                    class="w-8 mr-4 bg-white rounded-full inline"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c3fa12ba-dbc1-4c80-bb2b-efcb1e8a4273/icons8-finn-96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200626T110244Z&X-Amz-Expires=86400&X-Amz-Signature=0fc60a68d61741cfb3b9aac08959cbcd5c8b25db5f409fdadc98ccf77b3a778c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22icons8-finn-96.png%22"
                    alt="student-avatar"
                  />
                  <p class="text-lg inline">Audrey</p>
                </div>
                <div
                  class="block w-full bg-gray-200 px-4 py-3  text-left items-center mb-2"
                >
                  <img
                    class="w-8 mr-4 bg-white rounded-full inline"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c3fa12ba-dbc1-4c80-bb2b-efcb1e8a4273/icons8-finn-96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200626T110244Z&X-Amz-Expires=86400&X-Amz-Signature=0fc60a68d61741cfb3b9aac08959cbcd5c8b25db5f409fdadc98ccf77b3a778c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22icons8-finn-96.png%22"
                    alt="student-avatar"
                  />
                  <p class="text-lg inline">Benson</p>
                </div>
                <div
                  class="block w-full bg-gray-200 px-4 py-3  text-left items-center mb-2"
                >
                  <img
                    class="w-8 mr-4 bg-white rounded-full inline"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c3fa12ba-dbc1-4c80-bb2b-efcb1e8a4273/icons8-finn-96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200626T110244Z&X-Amz-Expires=86400&X-Amz-Signature=0fc60a68d61741cfb3b9aac08959cbcd5c8b25db5f409fdadc98ccf77b3a778c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22icons8-finn-96.png%22"
                    alt="student-avatar"
                  />
                  <p class="text-lg inline">Carly</p>
                </div>
                <div
                  class="block w-full bg-gray-200 px-4 py-3  text-left items-center mb-2"
                >
                  <img
                    class="w-8 mr-4 bg-white rounded-full inline"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c3fa12ba-dbc1-4c80-bb2b-efcb1e8a4273/icons8-finn-96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200626T110244Z&X-Amz-Expires=86400&X-Amz-Signature=0fc60a68d61741cfb3b9aac08959cbcd5c8b25db5f409fdadc98ccf77b3a778c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22icons8-finn-96.png%22"
                    alt="student-avatar"
                  />
                  <p class="text-lg inline">Darwin</p>
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
              <a class="w-1/3 mr-auto" href="#">
                <div
                  class="flex-none h-20 w-20 text-center bg-white hover:bg-orange-500 py-6 px-5 ml-6 rounded-full"
                >
                  <i class="fas fa-microphone-slash fa-2x text-gray-700"></i>
                </div>
              </a>
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

import { mapActions, mapState } from "vuex";

export default {
  name: "BreakoutGroup",
  data() {
    return {};
  },
  components: {
    Navbar,
    AaudioBreakoutRoom,
    InputAnswer,
  },
  computed: {
    ...mapState("workSheets", ["sheets", "count"]),
  },
  methods: {
    ...mapActions("workSheets", ["getWorkSheets", "UpdateAnswer", "NewQuestion", "UpdateQuestion"]),
    answerQ() {
      //answer question
    },
    newQ() {
      // new question
      this.NewQuestion();
    }
  },
  created() {
    this.getWorkSheets(1);
    this.UpdateAnswer();
    this.UpdateQuestion(); // get new qeustion from api
  },
};
</script>

<style lang="css" scoped></style>
