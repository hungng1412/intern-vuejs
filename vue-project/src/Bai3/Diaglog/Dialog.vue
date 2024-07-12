<!-- components/Dialog.vue -->
<template>
    <div v-if="isVisible" class="dialog-overlay" @click.self="close">
      <div class="dialog-content">
        <h2>{{ title }}</h2>
        <slot></slot>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const dialogStore = useStore();
  
  const isVisible = computed(() => dialogStore.state.dialog.isVisible);
  const title = computed(() => dialogStore.state.dialog.title);
  
  const close = () => {
    dialogStore.commit('HIDE_DIALOG');
  };
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    text-align: center;
  }
  
  .dialog-content h2 {
    margin-top: 0;
    color: black;
  }
  
  button {
    margin-top: 1rem;
    
  }
  </style>
  