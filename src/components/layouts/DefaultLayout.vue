<script setup lang="ts">
import Header from '@/components/TheHeader.vue';
import Sidebar from '@/components/TheSidebar.vue';
</script>

<template>
    <div>
        <Header />
        <div class="dashboard-layout">
            <Sidebar />
            <main class="dashboard-content">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
  
