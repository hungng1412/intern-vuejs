<template>
  <el-aside>
    <el-menu style="width: 70px; height: 100vh; padding-top: 10px">
      <el-menu-item class="aside-item" index="1">
        <img
          class="menu-icon"
          style="width: 30px; display: block"
          src="../image/house-window-svgrepo-com.svg"
          alt="Element logo"
        />
        <p class="menu-text">Trang chủ</p></el-menu-item
      >
      <el-menu-item class="aside-item" index="2">
        <img
          style="width: 30px"
          src="../image/movie-lab-svgrepo-com.svg"
          alt="Element logo"
          class="menu-icon"
        />
        <p class="menu-text">Short</p></el-menu-item
      >
      <el-menu-item class="aside-item" index="3">
        <img
          style="width: 30px"
          src="../image/movie-svgrepo-com (1).svg"
          alt="Element logo"
          class="menu-icon"
        />
        <p class="menu-text">Kênh đăng kí</p></el-menu-item
      >
      <el-menu-item class="aside-item" index="4">
        <img
          style="width: 30px"
          src="../image/movie-svgrepo-com.svg"
          alt="Element logo"
          class="menu-icon"
        />
        <p class="menu-text">Bạn</p></el-menu-item
      >
    </el-menu>
  </el-aside>
</template>
<style scoped>
.menu-icon {
  width: 30px; /* Điều chỉnh kích thước icon nếu cần */
  display: block; /* Đảm bảo hình ảnh hiển thị block */
}

.menu-text {
  margin-top: -15px;
}
.el-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aside-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 0.65rem;
  height: 80px;
  text-align: center;
  width: 100%;
}
</style>
