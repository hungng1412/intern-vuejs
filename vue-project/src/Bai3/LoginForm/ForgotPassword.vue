<!-- components/ForgotPassword.vue -->
<template>
    <div>
      <h2>Forgot Password</h2>
      <form @submit.prevent="resetPassword">
        <div>
          <label for="userName">Username:</label>
          <input v-model="userName" required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <router-link to="/login">Back to Login</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const userName = ref('');
  
  const resetPassword = () => {
    // Logic for reset password
    alert("Success!")
  };
  </script>
  

