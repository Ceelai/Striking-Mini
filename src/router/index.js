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
  },
  {
    path: "/variations",
    name: "Variations",
    component: () => import("../views/Variations.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
