import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreateForm from "./components/CreateForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "CreateForm",
          name: "CreateForm",
          component: CreateForm
        }
      ]
    }
  ]
});
