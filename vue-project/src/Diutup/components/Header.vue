<template>

  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 30px"
        src="../image/align-justify-svgrepo-com.svg"
        alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item index="1">
      <img
        style="width: 120px"
        src="../image/Youtube-logo.svg"
        alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item>
      <el-input
        v-model="input1"
        class="custom-input"
        style="width: 300px; border-radius: 20px"
        size="default"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
    </el-menu-item>
    <el-menu-item index="2">
      <img
        style="width: 25px"
        src="../image/micro-svgrepo-com.svg"
        alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    
    <el-menu-item index="3">
      <img
        style="width: 25px"
        src="../image/bell-svgrepo-com.svg"
        alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item>
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>

.flex-grow {
  flex-grow: 1;
}
</style>
