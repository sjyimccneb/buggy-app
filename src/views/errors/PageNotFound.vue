<script setup lang="ts">
</script>

<template>
  <div class="error-label">404</div>
  <div class="error-text">Page not found</div>
  <div class="error-text mt-4">
    <button class="btn-primary" @click="$router.push('/')">
      Go home
    </button>
  </div>
</template>
<style scoped>
.error-label {
  font-size: 10rem;
  color: var(--main-text-color-dark);
  text-align: center;
  margin-top: 30vh;
}

.error-text {
  font-size: 2rem;
  color: var(--main-text-color-dark);
  text-align: center;
}

.error-btn {
  margin-top: 2rem;
  text-align: center;
}
</style>