<template>
  <div class="button-container">
    <el-button plain>Tất cả</el-button>
    <el-button plain>Âm nhạc</el-button>
    <el-button plain>Danh sách kết hợp</el-button>
    <el-button plain>Trò chơi</el-button>
    <el-button plain>Trực tiếp</el-button>
    <el-button plain>Trò chơi hành động phiêu lưu</el-button>
    <el-button plain>Đọc rap</el-button>
    <el-button plain>Bóng đá</el-button>
    <el-button plain>Trò chơi điện tử chủ đề thể thao</el-button>
    <el-button plain>Mới tải lên gần đây</el-button>
    <el-button plain>Đã xem</el-button>
    <el-button plain>Đề xuất mới</el-button>
  </div>
  <el-container>
    <el-row :gutter="20">
      <el-col :span="6" v-for="video in videos" :key="video.id">
        <el-card :body-style="{ padding: '0px' }">
          <el-image
            style="width: 100%; height: 150px"
            :src="video.thumbnail"
            :fit="fit"
          />
          <div style="padding: 14px">
            <span>{{ video.title }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ video.time }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>
<script setup>
import { ref } from "vue";

const videos = ref([
  {
    id: 1,
    title: "Video 1",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "10:00",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
  {
    id: 6,
    title: "Video 6",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
  {
    id: 7,
    title: "Video 7",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
  {
    id: 8,
    title: "Video 8",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072",
    time: "12:30",
  },
]);
</script>

<style scoped>
.el-card {
  margin: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
}
.el-button {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
}
.el-button:hover {
  background-color: #444;
  border-color: #666;
  color: #fff;
}
.button-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}

.el-button {
  flex: 0 0 auto;
  margin-right: 10px;
}

.button-container::-webkit-scrollbar {
  display: none; /* Ẩn thanh cuộn trên các trình duyệt dựa trên Webkit */
}

.button-container {
  -ms-overflow-style: none; /* Ẩn thanh cuộn trên Internet Explorer và Edge */
  scrollbar-width: none; /* Ẩn thanh cuộn trên Firefox */
}
.el-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
