import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'Senior Software Engineer' },
      { id: 3, name: 'Bob Johnson', position: 'Junior Software engineer' },
      { id: 4, name: 'John Smith', position: 'Web Designer' },
      { id: 5, name: 'Jane Doe', position: 'QA' },
      { id: 6, name: 'Bob Smith', position: 'Project manager' },
    ],
  }),
  actions: {
    deleteUser(userId: number) {
      const index = this.users.findIndex((user) => user.id === userId);
      if (index !== -1) this.users.splice(index, 1);
    },
    addUser(name: string, position: string) {
      const id = this.users.length + 1;
      this.users.push({ id, name, position });
    },
    editUser(userId: number, name: string, position: string) {
      const index = this.users.findIndex((user) => user.id === userId);
      if (index !== -1) {
        this.users[index].name = name;
        this.users[index].position = position;
      }
    }
  },
});
