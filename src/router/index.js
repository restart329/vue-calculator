import Vue from "vue";
import VueRouter from "vue-router";
import standardRouter from "./standard";
import exchangrateRouter from "./exchangrate";
import unitconversionRouter from "./unitconversion";

Vue.use(VueRouter);

const routes = [
  standardRouter,
  exchangrateRouter,
  unitconversionRouter,
  {
    path: "/*",
    redirect: "/standard"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
