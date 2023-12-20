<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isSidebarOpen = ref(false); // State to track sidebar visibility

const links = [
  { name: 'Home', path: '/' },
  { name: 'Table', path: '/table' },
];

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Computed style for the toggle button
const toggleButtonStyle = computed(() => ({
  left: isSidebarOpen.value ? '220px' : '20px', // Adjust based on sidebar state
  bottom: '20px',
}));
</script>

<template>
  <button class="sidebar-toggle" @click="toggleSidebar" :style="toggleButtonStyle">
    <span class="menu-icon">&#9776;</span>
  </button>
  <aside class="dashboard-sidebar" :class="{ open: isSidebarOpen }">
    <ul class="sidebar-nav">
      <li v-for="link in links" :key="link.path">
        <router-link @click="toggleSidebar" :to="link.path"
          :class="{ active: link.path === route.path, inactive: link.path !== route.path }">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
/* sidebar */
.dashboard-sidebar {
  width: 200px;
  background-color: var(--sidebar-bg-color);
  flex: 0 0 auto;
  height: calc(100vh - 30px);
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.2);
}

.sidebar-nav {
  list-style: none;
  font-size: large;
  padding: 0;
  text-align: center;
}

.sidebar-nav li {
  padding: 10px;
}

.router-link-active {
  color: var(--main-text-color-dark);
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;
}

.inactive {
  color: var(--main-text-color-light);
  text-decoration: none;
}

/* Sidebar Toggle Button */
.sidebar-toggle {
  position: fixed;
  bottom: 20px;
  /* Position at bottom-left */
  left: 20px;
  z-index: 1000;
  background-color: var(--button-primary-color);
  border: none;
  border-radius: 50%;
  /* Round shape */
  width: 50px;
  /* Button size */
  height: 50px;
  color: white;
  font-size: 20px;
  /* Icon size */
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: left 0.3s;
  /* Transition for sliding effect */
}

/* Menu Icon */
.menu-icon {
  display: block;
  padding-bottom: 3px;
}

/* Mobile sidebar styles */
@media (max-width: 768px) {
  .dashboard-sidebar {
    position: fixed;
    left: -200px;
    transition: left 0.3s;
  }

  .dashboard-sidebar.open {
    left: 0;
  }

  .sidebar-toggle {
    display: flex;
    left: 20px;
    /* Adjust position when sidebar is open */
  }
}</style>
  