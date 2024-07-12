<template>
    <div v-html="svgContent" v-if="svgContent"></div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  
  // Props
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })
  
  // State
  const svgContent = ref('')
  
  // Load SVG content
  const loadSvg = async (name) => {
    try {
      const response = await fetch(new URL(`../assets/icons/${name}.svg`, import.meta.url).href)
      if (!response.ok) throw new Error('Network response was not ok')
      svgContent.value = await response.text()
    } catch (error) {
      console.error(`Error loading SVG: ${error}`)
      svgContent.value = ''
    }
  }
  
  // Watch for changes in props.name
  watchEffect(() => {
    if (props.name) {
      loadSvg(props.name)
    }
  })
  </script>
  
  <style scoped>

  </style>