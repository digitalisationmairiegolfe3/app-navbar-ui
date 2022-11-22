import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import homeLayout from '../views/home-layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: homeLayout
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
