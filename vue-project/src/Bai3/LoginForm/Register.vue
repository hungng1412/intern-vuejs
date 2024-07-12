<!-- components/Register.vue -->
<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="userName">Username:</label>
          <input type="userName" v-model="userName" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <router-link to="/login">Already have an account? Login</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const userName = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const register = () => {
    // Logic for register
   alert("Success!")
  };
  </script>
  