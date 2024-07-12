<!-- <template>
  <div class="side-bar">
    <ul>
      <li v-for="item in sidebarItems">{{ item }}</li>
    </ul>
  </div>
</template> -->
<template>
  <el-scrollbar height="400px">
    <p v-for="item in sidebarItems" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: #333
}
</style>

<script setup>
import { reactive } from "vue";

const sidebarItems = reactive([
  "Category",
  "Clothing",
  "Electrics",
  "Shoes",
  "Watchers",
  "Jewelery",
]);
</script>

<style scoped>
* {
  
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}
.side-bar li{
    list-style: none;
    border: 1px solid black;
    background-color: gray;
    margin-left: 19px;
    padding:  15px 80px;
}
.side-bar{
    width: fit-content;
    height: fit-content;
    /* background-color: gray; */
    /* padding:  25px 40px; */
}
</style>
