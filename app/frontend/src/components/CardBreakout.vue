<template>
  <div class="w-1/3 px-2 mb-4">
      <a href="#">
        <div class="bg-white p-2 rounded hover:shadow-md">
          <div class="bg-gray-300 rounded w-full p-3 h-48">
            <p class="text-center mt-3">
              Score: {{ group.score }}
            </p>
            <p class="text-center mt-3">
              Answered: {{ group.answered }}
            </p>
            <p class="text-center mt-3">
              {{turn}}`s turn ...
            </p>
          </div>
          <div class="px-3 py-2">
            <p class="inline-block text-normal font-semibold">
              {{group.name}}
            </p>
            <i
              class="inline-block fas fa-ellipsis-v float-right mt-1 text-gray-500"
            ></i>
            <p class="block text-sm text-gray-600">
              <span  v-for="(user, i) in group.users" :key="user.id">
                {{ user.name }}  {{ (group.users.length - 1) == i ? "" : "-" }}
              </span>
            </p>
            <button
              @click.prevent="goToBreakout(1, group.id)"
              class="block bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline-none text-white text-xs font-bold py-1 px-4 mt-2 rounded items-center"
            >
              <span>Join Group</span>
            </button>
          </div>
        </div>
      </a>
    </div>
</template>

<script>
export default {
  name: "CardBreakout",
  props: ["group"],
  data() {
    return {};
  },
  computed: {
    turn() {
      if (!this.group) return ""
      let turnTemp;
      this.group.users.forEach((user) => {
        if (user.turn) {
          turnTemp = user.name
        }
          
      })
    return turnTemp
    }
  },
  methods: {
    goToBreakout(class_id, work_group_id) {
      this.$router.push({
        name: `BreakoutGroupStudent`,
        params: {
          class_id: 1,
          work_group_id: work_group_id,
        },
      });
    },
  }
};
</script>

<style lang="css" scoped></style>
