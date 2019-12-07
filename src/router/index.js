import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/People.vue')
  },
  {
    path: '/nature',
    name: 'nature',
    component: () => import('../views/Nature.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/Events.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
