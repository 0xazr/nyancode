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
      path: "/content",
      name: "Content",
      component: () => import("../views/Content.vue"),
    },
    {
      path: "/home",
      name: "homenew",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/coba",
      name: "coba",
      component: () => import("../components/coba.vue"),
    },
  ],
});

export default router;
