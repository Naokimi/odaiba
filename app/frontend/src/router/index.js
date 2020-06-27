import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// auht
import LoginStudent from "../views/students/Login.vue";
import LoginTeacher from "../views/teachers/Login.vue";

// stidents
import DashboardStudent from "../views/students/Dashboard.vue";
import BreakoutGroupStudent from "../views/students/BreakoutGroup.vue";
import ClassRoomStudent from "../views/students/ClassRoom.vue";

// teachers
import BreakoutTeacher from "../views/teachers/Breakout.vue";
import DashboardTeacher from "../views/teachers/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "studentLogin",
    component: LoginStudent,
    meta: {
      isLoggedIn: false,
    },
  },
  {
    path: "/listurl",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "student",
    component: LoginStudent,
    meta: {
      isLoggedIn: false,
    },
  },
  {
    path: "/login/teachers",
    name: "LoginTeacher",
    component: LoginTeacher,
    meta: {
      isLoggedIn: false,
    },
  },
  {
    path: "/students/dashboard",
    name: "studentsDashboard",
    component: DashboardStudent,
    meta: {
      isLoggedIn: true,
    },
  },
  {
    path: "/students/classroom/:id",
    name: "ClassRoomStudent",
    component: ClassRoomStudent,
    meta: {
      isLoggedIn: true,
    },
  },
  {
    path: "/teachers/dashboard",
    name: "DashboardTeacher",
    component: DashboardTeacher,
  },
  // classroom
  {
    path: "/classrooms/:class_id/work_groups/:work_group_id",
    name: "BreakoutGroupStudent",
    component: BreakoutGroupStudent,
    meta: {
      isLoggedIn: true,
    },
  },
  {
    path: "/classrooms/:id/work_groups/",
    name: "BreakoutTeacher",
    component: BreakoutTeacher,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
