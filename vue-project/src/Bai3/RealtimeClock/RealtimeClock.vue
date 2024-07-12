<!-- - [ ] Dùng composables tạo đồng hồ thời gian thực -->
<template>
    <h2>{{ hours }}:{{ minutes }}:{{ seconds }}</h2>
</template>

<script setup>
import { useClock } from "./composables/RealtimeClock";
const { hours, minutes, seconds } = useClock();

</script>