<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <div>
    <h2>Tab B</h2>
    <input v-model="inputValue" />
  </div>
</template>
