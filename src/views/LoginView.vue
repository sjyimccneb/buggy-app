<script setup lang="ts">
import Card from '@/components/TheCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePassword = (pass: string): boolean => {
    // Example: at least 6 characters
    return pass.length >= 6;
};

const highlightInvalidInput = (inputId: string) => {
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.add('invalid');
        input.addEventListener('input', () => {
            input.classList.remove('invalid');
        });
    }
};

const validateForm = (): boolean => {
    if (!validateEmail(email.value)) {
        highlightInvalidInput('email');
        return false;
    }
    if (!validatePassword(password.value)) {
        highlightInvalidInput('password');
        return false;
    }
    return true;
};

const login = () => {
    if (!validateForm()) {
        return;
    }
    // TODO: login logic
    // Redirect to home page after successful login
    router.push('/');
}

const goToRegister = () => {
    router.push('/register');
}
</script>

<template>
    <div class="login-view">
        <Card>
            <template #content>
                <h2>Login</h2>
                <form class="login-form" @submit.prevent>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" autocomplete="email" />

                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" autocomplete="current-password" />

                    <!-- <button class="my-2 h-8 btn-primary" @click="login">Login</button> -->
                </form>
                <div class="register-container">
                    <button class="register-button" @click="goToRegister">Register</button>
                </div>
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

.register-container {
    display: flex;
    justify-content: center;
}

.register-button {
    background-color: transparent;
    border: none;
    color: var(--main-text-color);
    cursor: pointer;
    font-weight: bold;
    padding: 0;
    text-decoration: underline;
}

.register-button:hover {
    color: var(--button-primary-color-hover);
}
</style>
