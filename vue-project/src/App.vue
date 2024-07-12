<template>
  <!-- <Bai3></Bai3> -->
  <!-- <Dialog></Dialog> -->
  <!-- <calculator></calculator> -->
  <!-- <shopee/> -->
  <!-- <Bai4></Bai4> -->
   <!-- <diutube></diutube> -->
   <h1>Branch: {{ branchName }}</h1>
   <Websocket/>
</template>

<script setup>
// import Shopee from "./shopee/Shopee.vue";
// import Bai4 from './Bai4/Bai4.vue'
import { ref } from 'vue';
import Diutube from './Diutup/Diutube.vue';
import Websocket from './Bai5/Websocket.vue';
const branchName = ref(import.meta.env.VITE_BRANCH_NAME);
</script>