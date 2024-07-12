<template>
    <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
    import { counter } from "../composables/Counter";
    const {count, increment, decrement} = counter();
</script>
