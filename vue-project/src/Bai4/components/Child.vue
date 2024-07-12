<template>
    <div>
      <h3>Child Component</h3>
      <p>{{ sharedData }}</p>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  
  const sharedData = inject('sharedData');
  </script>
  