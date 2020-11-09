import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AlgoContainer from "../views/AlgoContainer.vue";
import Authenticate from "../views/Authenticate.vue";
import Upload from "../views/Upload.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/visualize/:name",
    name: "visualize",
    component: AlgoContainer,
    props: true
  },
  {
    path: "/authenticate",
    name: "authenticate",
    component: Authenticate
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
