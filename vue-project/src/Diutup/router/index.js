
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Diutube.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { 
    path: '/', 
    component: Home 
  },
  {
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router