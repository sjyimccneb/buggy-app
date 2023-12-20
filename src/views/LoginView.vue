<script setup lang="ts">
import Card from '@/components/TheCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');

const login = () => {
    // TODO: login logic
    // Redirect to home page after successful login
    router.push('/');
}


</script>

<template>
    <div class="login-view">
        <Card>
            <template #content>
                <h2>Login</h2>
                <form class="login-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" />

                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" />

                    <button class="my-2 h-8 btn-primary" @click="login">Login</button>
                </form>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30vw;
}
@media (max-width: 768px) {
    .login-form {
        width: 80vw;
    }
}

.login-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
}

label {
    font-weight: bold;
}

input {
    padding: 0.5rem;
}
</style>
