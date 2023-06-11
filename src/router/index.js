import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/tools",
      name: "Content",
      component: () => import("../views/Content.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/coba",
      name: "coba",
      component: () => import("../components/coba.vue"),
    },
  ],
});

export default router;
