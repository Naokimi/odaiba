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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login/students",
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
    path: "/students/breakout-group",
    name: "BreakoutGroupStudent",
    component: BreakoutGroupStudent,
    meta: {
      isLoggedIn: true,
    },
  },
  {
    path: "/students/class-room",
    name: "ClassRoomStudent",
    component: ClassRoomStudent,
    meta: {
      isLoggedIn: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
