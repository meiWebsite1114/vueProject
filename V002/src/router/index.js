import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostDetailView from "../views/PostDetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PostList",
      component: PostListView,
    },
    {
      path: "/posts/:id",
      name: "PostDetail",
      component: PostDetailView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
