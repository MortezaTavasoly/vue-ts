import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashBoard from "../views/Dashboard/DashBoard.vue";
import TodoList from "../views/TodoList/TodoList.vue";
import WeatherView from "../views/WeatherView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: DashBoard,
  },
  {
    path: "/todos",
    name: "todos",
    component: TodoList,
  },
  {
    path: "/weather",
    name: "weather",
    component: WeatherView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
