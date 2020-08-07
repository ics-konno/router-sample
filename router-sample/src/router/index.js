import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewPage from "../views/NewPage";
import User from "../views/User";
import Profile from "../views/UserChild/Profile";
import Setting from "../views/UserChild/Setting";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/new",
    name: "New",
    component: NewPage
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
    children: [
      { path: "profile", name: "Profile", component: Profile },
      { path: "setting", name: "Setting", component: Setting }
    ]
  },
  {
    path: "/dummy",
    redirect: {name: "Home"}
    // redirect: "/" でもよい
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
