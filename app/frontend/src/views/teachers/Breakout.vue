<template>
  <div>
    <Navbar />
    <div class="flex p-6 mb-4">
      <div class="w-1/4 px-4">
        <button
          class="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 mb-6 rounded-lg inline-flex items-center"
        >
          <i class="fas fa-reply mr-3"></i>
          <span>Back to Dashboard</span>
        </button>

        <div
          class="block bg-purple-500 p-3 rounded-lg mb-6"
          style="background-color: #7E3EC9"
        >
          <div
            class="font-semibold text-xl text-center flex items-center text-white mb-2"
          >
            <div class="flex-1"></div>
            <h4 class="flex-none">Classroom Details</h4>
            <a href="#" class="flex-1 text-right hover:text-gray-300"
              ><i class="fas fa-cog mr-1"></i
            ></a>
          </div>
          <div class="bg-white p-3 rounded-sm">
            <div class="block w-full text-lg mb-3">
              <p class="inline font-semibold">English 4B</p>
              <p class="inline text-gray-600 float-right">10:10-11:00am</p>
            </div>
            <hr class="border mb-2" />
            <div class="block w-full text-lg">
              <a href="#" class="flex items-center hover:text-gray-600">
                <p class="flex-1 font-semibold mr-3">Students</p>
                <p class="flex-1">28/30</p>
                <i class="flex-1 fas fa-chevron-right text-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="block bg-blue-500 p-3 rounded-lg mb-6"
          style="background-color: #2EA0E6"
        >
          <div class="font-semibold text-xl text-center text-white mb-2">
            <h4 class="">Your Worksheets</h4>
          </div>
          <div class="bg-white p-3 rounded-sm">
            <a
              class="block w-full mb-2 p-1 pl-2 bg-white hover:bg-gray-200 rounded"
              href=""
            >
              <p class="inline-block text-normal font-semibold">
                Past Tense (3)
              </p>
              <i
                class="inline-block fas fa-ellipsis-v float-right mt-1 mr-1 text-gray-500"
              ></i>
              <p class="block text-sm text-gray-600">2020/06/20</p>
            </a>
            <hr class="border mb-2" />
            <a
              class="block w-full mb-2 p-1 pl-2 bg-white hover:bg-gray-200 rounded"
              href=""
            >
              <p class="inline-block text-normal font-semibold">
                Past Tense (3)
              </p>
              <i
                class="inline-block fas fa-ellipsis-v float-right mt-1 mr-1 text-gray-500"
              ></i>
              <p class="block text-sm text-gray-600">2020/06/20</p>
            </a>
            <hr class="border mb-2" />
            <a
              class="block w-full mb-2 p-1 pl-2 bg-white hover:bg-gray-200 rounded"
              href=""
            >
              <p class="inline-block text-normal font-semibold">
                Past Tense (3)
              </p>
              <i
                class="inline-block fas fa-ellipsis-v float-right mt-1 mr-1 text-gray-500"
              ></i>
              <p class="block text-sm text-gray-600">2020/06/20</p>
            </a>
            <hr class="border mb-2" />
            <a
              class="block w-full mb-2 p-1 pl-2 bg-white hover:bg-gray-200 rounded"
              href=""
            >
              <p class="inline-block text-normal font-semibold">
                Past Tense (3)
              </p>
              <i
                class="inline-block fas fa-ellipsis-v float-right mt-1 mr-1 text-gray-500"
              ></i>
              <p class="block text-sm text-gray-600">2020/06/20</p>
            </a>
            <hr class="border mb-2" />
            <a
              class="block w-full mb-2 p-1 pl-2 bg-white hover:bg-gray-200 rounded"
              href=""
            >
              <p class="inline-block text-normal font-semibold">
                Past Tense (3)
              </p>
              <i
                class="inline-block fas fa-ellipsis-v float-right mt-1 mr-1 text-gray-500"
              ></i>
              <p class="block text-sm text-gray-600">2020/06/20</p>
            </a>
            <hr class="border mb-2" />
            <a
              class="block w-full mb-2 p-1 pl-2 bg-white hover:bg-gray-200 rounded"
              href=""
            >
              <p class="inline-block text-normal font-semibold">
                Past Tense (3)
              </p>
              <i
                class="inline-block fas fa-ellipsis-v float-right mt-1 mr-1 text-gray-500"
              ></i>
              <p class="block text-sm text-gray-600">2020/06/20</p>
            </a>
          </div>
        </div>
      </div>

      <div class="w-3/4 px-4">
        <div class="w-full block flex items-center w-auto">
          <div class="w-2/3 flex mr-4">
            <button
              class="flex-auto bg-gray-900 hover:bg-gray-700 text-white text-base font-bold py-2 px-4 mb-6 rounded-lg items-center mt-0 mr-2"
            >
              <span>End Class</span>
            </button>
            <button
              class="flex-auto bg-gray-900 hover:bg-gray-700 text-white text-base font-bold py-2 px-4 mb-6 rounded-lg items-center mt-0 mr-2"
            >
              <span>End Group Session</span>
            </button>
            <button
              class="flex-auto bg-teal-500 hover:bg-teal-400 text-white text-base font-bold py-2 px-4 mb-6 rounded-lg items-center mt-0"
            >
              <span>Distribute Worksheet</span>
            </button>
          </div>

          <div class="w-1/3">
            <div
              class="w-full bg-orange-500 py-2 px-4 mb-6 rounded-lg"
              style="background-color: #F98436"
            >
              <div
                class="font-semibold text-base font-bold text-center flex items-center text-white"
              >
                <div class="flex-1"></div>
                <h4 class="flex-none">Student Groups</h4>
                <a href="#" class="flex-1 text-right hover:text-gray-300"
                  ><i class="fas fa-cog mr-1"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="flex flex-wrap -mx-2">
            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 1
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 2
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 3
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 4
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 5
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 6
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 7
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-1/3 px-2 mb-4">
              <a href="#">
                <div class="bg-white p-2 rounded hover:shadow-md">
                  <div class="bg-gray-300 rounded w-full p-3 h-48">
                    <p class="text-center">Video goes here</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="inline-block text-normal font-semibold">
                      Group 8
                    </p>
                    <i
                      class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
                    ></i>
                    <p class="block text-sm text-gray-600">
                      Amanda, Benny, Carson, Darwin
                    </p>
                    <button
                      class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
                    >
                      <span>Join Group</span>
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Breakout",

  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="css" scoped></style>
