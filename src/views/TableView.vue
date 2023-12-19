<script setup lang="ts">
import { ref } from 'vue';
import TheCard from '@/components/TheCard.vue';
import TheModalWindow from '@/components/TheModalWindow.vue';
import { useUserStore } from '@/stores/users';

const userStore = useUserStore();
const isModalOpen = ref<boolean>(false);
const newUser = ref({ name: '', position: '' });

const addUser = () => {
  userStore.addUser(newUser.value.name, newUser.value.position);
  isModalOpen.value = false;
  newUser.value = { name: '', position: '' };
};

</script>

<template>
  <TheModalWindow :show="isModalOpen" @update:show="isModalOpen = $event">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newUser.name">
    </div>
    <div>
      <label for="position">Position:</label>
      <input type="text" id="position" v-model="newUser.position">
    </div>
    <div>
      <button class="btn-primary" @click="addUser">Confirm Add</button>
    </div>
  </TheModalWindow>
  <TheCard title="Table users">
    <template #title-buttons>
      <button class="btn-primary" @click="isModalOpen = true">Add user</button>
    </template>
    <template #content>
      <table class="full-width-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userStore.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.position }}</td>
            <td>
              <button class="btn-primary" @click="userStore.deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </TheCard>
</template>
