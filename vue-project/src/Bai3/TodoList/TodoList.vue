<!-- TodoList.vue -->
<template>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const todos = computed(() => store.state.todos);
  
  const toggleTodo = (id) => {
    store.dispatch('toggleTodo', id);
  };
  
  const removeTodo = (id) => {
    store.dispatch('removeTodo', id);
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  .completed {
    text-decoration: underline;
  }
  button {
    background: none;
    border: none;
    color: red;
    cursor: pointer;
  }
  </style>
  