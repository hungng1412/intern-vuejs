<template>
  <div>
    <h1>Grandpa component</h1>
    <Parent />
  </div>
  <div style="display: none;">
    <CustomIcon name="icon1" />
    <CustomIcon name="icon2" />
    <CustomIcon name="icon3" />
    <CustomIcon name="icon4" />
    <CustomIcon name="icon5" />
    <CustomIcon name="icon6" />
  </div>
  <div>
    <element-plus></element-plus>
  </div>
</template>

<script setup>
import CustomIcon from "./CustomIcon.vue";
import ElementPlus from "./ElementPlus.vue";
import Parent from "./components/Parent.vue";
import { provide, ref } from 'vue';

const data = ref('Data from grandpa');
provide('sharedData', data);
</script>
<style>
svg {
  width: 100px;
  height: auto;
}
</style>
