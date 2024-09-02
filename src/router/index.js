import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
