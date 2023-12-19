<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getActivity } from '@/api/bored';
import { BoredResponse  } from '@/api/bored/types/bored';
import TheCard from '@/components/TheCard.vue';

const activity = ref<BoredResponse>({
  activity: '',
  type: '',
  participants: 0,
  price: 0,
  link: '',
  key: '',
  accessibility: 0,
});

const fetchActivity = async () => {
  await getActivity();
};

onMounted(async () => {
  await fetchActivity();
});

</script>

<template>
    <TheCard title="Ideas for activity">
    <template #title-buttons>
      <button class="btn-primary" @click="fetchActivity">Refresh</button>
    </template>
      <template #content>
        <h4>{{ activity.activity }}</h4>
        <p>Participants: {{ activity.participants }}</p>
        <p>Price: {{ activity.price }}</p>
        <p>Accessibility: {{ activity.accessibility }}</p>
        <p>Information link: <a :href="activity.link">{{ activity.link }}</a></p> 
      </template>
    </TheCard>
</template>