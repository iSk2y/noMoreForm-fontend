import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import axios from "axios";
import custom_form from "./components/custom_form";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(custom_form);
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
