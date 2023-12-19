import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '@/stores/users';

describe('userStore', () => {
    beforeEach(() => {
        // Reset Pinia state before each test
        setActivePinia(createPinia());
    });

    it('initial state', () => {
        const userStore = useUserStore();
        expect(userStore.users).toEqual([
            { id: 1, name: 'John Doe', position: 'Software Engineer' },
            { id: 2, name: 'Jane Smith', position: 'Senior Software Engineer' },
            { id: 3, name: 'Bob Johnson', position: 'Junior Software engineer' },
            { id: 4, name: 'John Smith', position: 'Web Designer' },
            { id: 5, name: 'Jane Doe', position: 'QA' },
            { id: 6, name: 'Bob Smith', position: 'Project manager' },
        ]);
    });

    it('add user', () => {
        const userStore = useUserStore();
        userStore.addUser('John Doe', 'Software Engineer');
        expect(userStore.users).toEqual([
            { id: 1, name: 'John Doe', position: 'Software Engineer' },
            { id: 2, name: 'Jane Smith', position: 'Senior Software Engineer' },
            { id: 3, name: 'Bob Johnson', position: 'Junior Software engineer' },
            { id: 4, name: 'John Smith', position: 'Web Designer' },
            { id: 5, name: 'Jane Doe', position: 'QA' },
            { id: 6, name: 'Bob Smith', position: 'Project manager' },
            { id: 7, name: 'John Doe', position: 'Software Engineer' },
        ]);
    });

});
