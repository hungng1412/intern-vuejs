<template>
  <div class="products">
    <img src="../img/hero-1.jpg" alt="" />
    <div class="container">
      <div v-for="product in productList" class="productItem" :key="product.id">
        <img :src="product.imgUrl" :alt="product.name" />
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import productImg1 from '../img/product-2.jpg';

const productList = reactive([
  {
    id: Date.now(),
    name: "T-shirt with john cena on the back",
    imgUrl: productImg1,
    isFavorite: false,
    price: "25$",
  },
  {
    id: Date.now(),
    name: "Jean",
    imgUrl: productImg1,
    isFavorite: false,
    price: "30$",
  },
  {
    id: Date.now(),
    name: "Denim",
    imgUrl: productImg1,
    isFavorite: false,
    price: "38.5$",
  },
]);
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.productItem {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  text-align: center;
}

.productItem img {
  max-width: 100%;
  height: auto;
}

img {
  width: 100%;
  height: 250px; /* Đảm bảo ảnh tự động điều chỉnh chiều cao theo chiều rộng */
  display: block; /* Loại bỏ khoảng trắng dưới ảnh */
  object-fit: cover; /* Giữ tỷ lệ ảnh và cắt các phần thừa để khớp với container */
}
</style>
