import Vue from "vue";
import router from "./router/index";
import ElementUI from "element-ui";
import "./assets/hk-theme/index.less";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
Vue.use(ElementUI);

const app: Vue = new Vue({
  router,
  render: h => h(App)
});

app.$mount("#app");

export default app;
