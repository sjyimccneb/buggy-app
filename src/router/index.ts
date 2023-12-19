import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import TableView from '@/views/TableView.vue';

const routes = [
  { path: '/', component: MainView },
  { path: '/table', component: TableView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;