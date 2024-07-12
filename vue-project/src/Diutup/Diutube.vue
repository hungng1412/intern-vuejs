<!-- <template>
  <Header/>
  <Aside></Aside>
  <Main></Main>
</template> -->
<template>
    <el-container>
      <el-header class="fixed-header">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="75px" class="fixed-aside">
          <Aside />
        </el-aside>
        <el-main class="main-content">
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </template>
<script setup>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
</script>
<style>
    .el-header{
        margin: 0 -20px;
    }
    .fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff; /* Đảm bảo header có nền trắng */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Thêm shadow để phân biệt header */
}

.fixed-aside {
  position: fixed;
  top: 60px; /* Đảm bảo dưới header */
  left: 0;
  height: calc(100% - 60px); /* Đảm bảo chiều cao dưới header */
  background-color: #fff; /* Đảm bảo aside có nền trắng */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Thêm shadow để phân biệt aside */
  overflow: hidden;
}

.main-content {
  margin-left: 75px; /* Đảm bảo nội dung chính không bị aside che */
  padding-top: 60px; /* Đảm bảo nội dung chính không bị header che */
  overflow: auto; /* Đảm bảo nội dung chính có thể cuộn */
}
</style>
