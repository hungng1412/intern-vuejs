
<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const parentMessage = ref("Hello there!");
const updateMessage = (newMessage) => {
  parentMessage.value = newMessage;
};

const isRed = ref(true);
function toggleColor() {
    isRed.value = !isRed.value;
}
const color = ref('green')
function changeColor() {
    color.value = color.value == 'green' ? 'blue' : 'green'
}

const array = ['Bun dau', 'Nem nuong', 'Lau ech', 'My cay']
</script>

<template>
    <div>
      <h1>Parent Component</h1>
      <ChildComponent
        :message="parentMessage"
        :updateCallbackMessage="updateMessage"
      />
    </div>
    <div>
      <h1>Class and Style binding</h1>
      <p :class="{ red: isRed }">This is RED</p>
      <p :style="{ color }" @click="changeColor">Touch this line</p>
      <button @click="toggleColor">Press this button</button>
    </div>
    <div>
        <h1>Array list</h1>
        <ul>
            <li v-for="item in array">{{ item }}</li>
        </ul>
    </div>
  </template>
  
<style scoped>
    .red {
        color: purple;
    }
</style>