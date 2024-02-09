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
    <p>Welcome to the INFO 2341 BUGGY App! There are 7 bugs to find. Can you catch them all?</p>
    <TheCard title="User Information">
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