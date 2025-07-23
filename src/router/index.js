import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TopView from '../views/TopView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'top',
    component: TopView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/regi',
    name: 'regi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegiView.vue'),
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/ExCompanyView.vue'),
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import('../views/ExPolicyView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // ページ遷移時のスクロール位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
