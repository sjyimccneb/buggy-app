<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './DefaultLayout.vue';
import MinimalLayout from './MinimalLayout.vue';

const route = useRoute();

const currentLayout = computed(() => {
    return route.meta.layout === 'minimal' ? MinimalLayout : DefaultLayout;
});
</script>

<template>
    <component :is="currentLayout">
        <slot></slot>
    </component>
</template>
  

  