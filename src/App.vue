<script setup lang="ts">
import Header from './components/TheHeader.vue';
import Sidebar from './components/TheSidebar.vue';
</script>

<template>
  <div id="app">
    <Header />
    <div class="dashboard-layout">
      <Sidebar />
      <main class="dashboard-content">
        <router-view />
      </main>
    </div>
  </div>
</template>
