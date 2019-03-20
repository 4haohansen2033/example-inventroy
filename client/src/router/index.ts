import Vue, { AsyncComponent } from "vue";
import Router, { RouteConfig, Route, NavigationGuard } from "vue-router";
// import Login from "../views/login/login.vue";

const Login: AsyncComponent = (): any => import("../views/login/login.vue");
Vue.use(Router);
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Login
    // children: [
    //   {
    //     path: "",
    //     component: Login
    //   }
    // ]
    // component: (): any => import("../views/login/login.vue")
  }
];

const router: Router = new Router({
  routes
});
export default router;
