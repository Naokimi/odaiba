<template>
  <div>
    <ul>
      <li><router-link to="/login/students">/login</router-link></li>
      <li><router-link to="/login/teachers">/login/teachers</router-link></li>
      <li>
        <router-link to="/classrooms/1/work_groups/"
          >/classrooms/:id/work_groups/</router-link
        >
      </li>

      <li>
        <router-link to="/classrooms/1/work_groups/1"
          >/classrooms/:id/work_groups/:id</router-link
        >
      </li>
      <li>
        <router-link to="/students/dashboard">/students/dashboard</router-link>
      </li>
      <li>
        <router-link to="/students/classroom/1"
          >/students/classroom/:id</router-link
        >
      </li>
      <li>
        <router-link to="/teachers/dashboard"> /teachers/dashboard</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
