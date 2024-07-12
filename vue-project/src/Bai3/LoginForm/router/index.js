import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Login.vue';
import Register from '../Register.vue';
import ForgotPassword from '../ForgotPassword.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
