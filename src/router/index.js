import { createRouter } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/favorites",
      name: "FavoritesView",
      component: FavoritesView,
    },
    {
      path: "/photo/:id",
      name: "PhotoPageView",
      component: PhotoPageView,
    },
  ],
});

export default router;
