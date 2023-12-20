import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import TableView from '@/views/TableView.vue';
import PageNotFound from '@/views/errors/PageNotFound.vue';

const routes = [
  {
    path: '/',
    component: MainView,
    meta: { layout: 'default' }
  },
  {
    path: '/table',
    component: TableView,
    meta: { layout: 'default' }
  },
  // paths with empty compoents
  {
    path: '/account',
    component: MainView,
    meta: { layout: 'default' }
  },
  {
    path: '/logout',
    component: MainView,
    meta: { layout: 'default' }
  },
  // errors
  {
    path: '/404',
    component: PageNotFound,
    meta: { layout: 'minimal' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;