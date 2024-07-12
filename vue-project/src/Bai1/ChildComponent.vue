<template>
    <div>
      <p>{{ message }}</p>
      <button @click="updateMessage">Update Message</button>
    </div>

    
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    updateCallbackMessage:{
      type: Function,
      required: true,
    }
  });

  function updateMessage() {
    props.updateCallbackMessage('Message updated')
  }
  
  </script>
  