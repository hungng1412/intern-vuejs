<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    modelValue: String
})

const inputValue = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])


watch(inputValue, (newInput) => {
    emit("update:modelValue", newInput)
})
</script>

<template>
  <h2>Tab A</h2>
  <input v-model="inputValue"  />

</template>
