<template>
  <li>{{ item.name }}
    <ul v-if="item.child">
        <NestedItem v-for="child in item.child"
        :item="child"
        >{{ item.name }}</NestedItem>
    </ul>
  </li>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
