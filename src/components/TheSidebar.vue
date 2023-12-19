<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Table',
    path: '/table',
  }
];

</script>

<template>
    <aside class="dashboard-sidebar">   
      <ul class="sidebar-nav">
        <li v-for="link in links" :key="link.path">
            <router-link 
            :to="link.path" 
            :class="{ 
                active: link.path === route.path, 
                inactive: link.path !== route.path 
            }"
            >
                {{ link.name }}
            </router-link>
        </li>
      </ul>
    </aside>
  </template>
  