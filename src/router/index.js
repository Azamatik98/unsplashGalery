import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoPageView from "../views/PhotoPageView.vue";
import FavoriteView from "../views/FavoriteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/favorites",
      name: "FavoriteView",
      component: FavoriteView,
    },
    {
      path: "/photo/:id",
      name: "PhotoPageView",
      component: PhotoPageView,
    },
  ],
});

export default router;
