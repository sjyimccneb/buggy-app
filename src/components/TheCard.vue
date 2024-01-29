<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
    <div class="dashboard-card">
        <div class="title-container">
            <h3>{{ props.title }}</h3>
            <slot name="title-buttons"></slot>
        </div>
        <div class="content-container">
            <slot name="content"></slot>
        </div>
        <div class="footer-container">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style scoped>
/* card */
.dashboard-card {
  background-color: var(--card-bg-color);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dashboard-card h3 {
  margin: 0;
}
</style>
