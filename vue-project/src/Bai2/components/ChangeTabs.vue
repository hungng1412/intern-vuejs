<template>
    <div class="ex3">
    <h1>Select tabs</h1>
    <div class="tabs">
      <button @click="selectTab('A')">Tab A</button>
      <button @click="selectTab('B')">Tab B</button>
    </div>
    <div class="tab-content">
      <component
        :is="currentTabComponent"
        v-model="currentInputValue"
      ></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TabA from "./Tabs/TabA.vue";
import TabB from "./Tabs/TabB.vue";

const selectedTab = ref("A");
const tabAValue = ref("");
const tabBValue = ref("");

const selectTab = (tab) => {
  selectedTab.value = tab;
};

const currentTabComponent = computed(() => {
  return selectedTab.value === "A" ? TabA : TabB;
});

//
const currentInputValue = computed({
  get() {
    return selectedTab.value === "A" ? tabAValue.value : tabBValue.value;
  },
  set(newValue) {
    if (selectedTab.value === "A") {
      tabAValue.value = newValue;
    } else {
      tabBValue.value = newValue;
    }
  },
});
</script>