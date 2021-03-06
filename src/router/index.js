import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Front from './front';
import Back from './back';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      ...Front,
      ...Back
    ]
  },{
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
