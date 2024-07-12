<!-- <template> -->
    <!-- <nav-bar></nav-bar>
    <div class="wrapper">
     <side-bar :class="side-bar"></side-bar>
        <products :class="products"></products>
    </div> 
     -->
  <!-- <div class="common-layout">
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-container>
        <el-aside >
            <side-bar></side-bar>
        </el-aside>
        <el-main>
            <products></products>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template> -->
<template>
    <div class="common-layout">
      <el-container>
        <el-header><nav-bar></nav-bar></el-header>
        <el-main>  <products></products></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </template>
  
<script setup>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import Products from './components/Products.vue'
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>