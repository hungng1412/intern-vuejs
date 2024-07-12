<template>
  <div>
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <main>
      <slot :info="info"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
const info = {
  title: "Scoped slot",
  description:
    "As discussed in Render Scope, slot content does not have access to state in the child component.",
};
</script>

<style scoped>
    .card-header{
        color: black;
        background-color: antiquewhite;
    }
</style>
