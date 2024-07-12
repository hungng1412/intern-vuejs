<template>
  <div>
    <p>Window Width: {{ width }}</p>
  </div>
</template>

<script setup>
import { useWindowWidth } from "../composables/windowWidth";

const { width } = useWindowWidth();
</script>
