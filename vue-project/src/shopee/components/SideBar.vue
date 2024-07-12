<template>
  <div class="side-bar">
    <ul>
      <li v-for="item in sidebarItems">{{ item }}</li>
    </ul>
  </div>
</template>
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
    padding:  15px 30px;
}
.side-bar{
    width: fit-content;
    height: fit-content;
    /* background-color: gray; */
    /* padding:  25px 40px; */
}
</style>
