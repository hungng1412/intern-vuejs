<script setup>
// import { defineEmits, defineProps } from "vue";
const props = defineProps({
  message: {
    type: String,
  }
})
const emit = defineEmits(["update"]);

const updateValue = () => {
  emit("update", "Using emit");
};


</script>

<template>
  <div>
    <button @click="updateValue">Update message</button>
  </div>

</template>
