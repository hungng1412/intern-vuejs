import { createRouter, createWebHistory } from 'vue-router';
import Shopee from '../Shopee.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Shopee
  },
  {
    path: '/shop ',
    name: 'shop',
    component: Shop
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Page
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Page
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
