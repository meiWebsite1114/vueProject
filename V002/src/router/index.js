import { createRouter, createWebHashHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import DetailView from "../views/DetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "News",
      component: NewsView,
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: DetailView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
