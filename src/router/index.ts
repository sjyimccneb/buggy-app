import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import TableView from '@/views/TableView.vue';

const routes = [
  { path: '/', component: MainView },
  { path: '/table', component: TableView },
  // paths with empty compoents
  { path: '/account', component: MainView },
  { path: '/logout', component: MainView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;