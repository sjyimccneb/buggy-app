<script setup lang="ts">

const username = 'admin';

const links = [
  { name: 'Account', path: '/account' },
  { name: 'Logout', path: '/logout' },
];


</script>

<template>
  <header class="dashboard-header">
    <h2>BUGGY app</h2>
    <div class="user-dropdown">
      <button class="user-button">
        <i class="mr-1 fa-regular fa-circle-user"></i>
        {{ username }}
      </button>
      <div class="dropdown-content">
        <router-link v-for="link in links" :key="link.path" :to="link.path">
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>
<style scoped>

.dashboard-header {
  display: flex;
  justify-content: space-between; /* Aligns children to start and end of container */
  align-items: center;
  background-color: var(--header-bg-color);
  padding: 0px 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: var(--header-height);
}

.dashboard-header h2 {
  margin: 0;
  color: var(--main-text-color);
}

.user-dropdown {
  position: relative;
  display: inline-block;
}

.user-button {
  background: none;
  color: var(--main-text-color);;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  right: 0;
  position: absolute;
  background-color: var(--card-bg-color);
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: var(--main-text-color);;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 12px 12px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: var(--main-bg-color);
  border-radius: 4px;
}

.user-dropdown:hover .dropdown-content {display: block;}

@media screen and (max-width: 768px) {
  .dashboard-header {
    padding: 0px 20px;
  }
}
</style>