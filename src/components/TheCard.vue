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
