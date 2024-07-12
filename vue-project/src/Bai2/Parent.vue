<script setup>
import { ref } from "vue";
import Child from "./components/Child.vue";
import FavoriteChild from "./components/FavoriteChild.vue";
import SlotChild from "./components/SlotChild.vue";
import TabC from "./components/Tabs/TabC.vue";
import TabD from "./components/Tabs/TabD.vue";
import ChangeTabs from "./components/ChangeTabs.vue";
import CountNumber from "./components/CountNumber.vue"
import WindowWidth from "./components/WindowWidth.vue"
import { useMouse } from "./composables/Mouse.js"


const currentTab = ref("ChangeTabs");

const tabs = {
  ChangeTabs,
  TabC,
  TabD,
};

// #1:
const parentMessage = ref("Parent");
function callFromChild(message) {
  parentMessage.value = message;
}

const { x, y } = useMouse()
</script>

<template>
  
  <!-- #1 -->
  <div class="ex1">
    <h1>Update props from child</h1>
    <p>{{ parentMessage }}</p>
    <Child :message="parentMessage" @update="callFromChild" />
    <FavoriteChild v-model="parentMessage" />
  </div>
  <!-- #4 -->
  <div class="ex4">
    <SlotChild>
      <template #header>
        <h2>Header Content</h2>
      </template>
      <template #default="slotProps">
        <h2>{{ slotProps.info.title }}</h2>
        <p>{{ slotProps.info.description }}</p>
      </template>
      <template #footer>
        <p>Footer Content</p>
      </template>
    </SlotChild>
  </div>
  <!-- #5 -->
  <div>
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
  <!-- #6 -->
   <div>
    <h1>Composables</h1>
    <CountNumber/>
    <WindowWidth/>
    Mouse position: {{ x }}, {{ y }}
   </div>

</template>
