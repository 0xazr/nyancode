import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Tes2.vue"),
    },
    {
      path: "/tes",
      name: "tes",
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
