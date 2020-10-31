import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/thecar",
    name: "TheCar",
    component: () => import("../views/TheCar.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL === "production" ? "/Striking-Mini" : "",
  routes
});

export default router;
