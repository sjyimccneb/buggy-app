<script setup lang="ts">
import { ref, watch } from 'vue';
import TheCard from '@/components/TheCard.vue';

const props = defineProps({
    show: Boolean
});
const emits = defineEmits(['update:show']);

const isVisible = ref(props.show);

const close = () => {
    isVisible.value = false;
    emits('update:show', false);
};

watch(() => props.show, (newValue) => {
    isVisible.value = newValue;
});
</script>

<template>
    <div v-if="isVisible" class="modal">
        <TheCard title="Table users">
            <template #title-buttons>
                <button class="btn-primary" @click="close">Close</button>
            </template>
            <template #content>
                <div class="modal-content">
                    <slot></slot>
                </div>
            </template>
        </TheCard>
    </div>
</template>
   
<style>
.modal {
    /* Your modal styling */
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}


/* Modal Content Styling */
.modal-content div {
    margin-bottom: 15px;
}

.modal-content label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.modal-content input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    /* Makes sure padding doesn't affect overall width */
}


</style>
