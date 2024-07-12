<template>
  <div>
    <h1>Using v-model</h1>
    <input v-model="inputValue" @input="handleInput" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
