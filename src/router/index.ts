import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import homeLayout from '../views/home-layout.vue'
import profil from "../components/profil/profil.vue";
import commonVars from "../common/core/commonVars";


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: commonVars.HOME_PATH,
    name: commonVars.HOME,
    component: homeLayout,
  },
  {
    path: commonVars.PROFIL_PATH,
    name: commonVars.PROFIL,
    component: profil,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
