<template>
    <nav-bar></nav-bar>
    <div class="wrapper">
        <side-bar :class="side-bar"></side-bar>
        <products :class="products"></products>
    </div>
   
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import Products from './components/Products.vue'
</script>
<style scoped>
    .wrapper{
        display: flex;
    }
    .side-bar{
        flex: 1
    }
    .products{
        flex: 3
    }
</style>