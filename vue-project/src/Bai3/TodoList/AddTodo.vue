<!-- AddTodo.vue -->
<template>
    <div>
      <input v-model="newTodoText" placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const newTodoText = ref('');
  const todoStore = useStore();
  
  const addTodo = () => {
    if (newTodoText.value.trim() !== '') {
      todoStore.dispatch('addTodo', newTodoText.value);
      newTodoText.value = '';
    }
  };
  </script>
  
  <style scoped>
  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    box-sizing: border-box;
  }
  </style>
  