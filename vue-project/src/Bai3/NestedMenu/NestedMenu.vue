<!-- - [ ] Chuyển nested menu từ js sang vue -->
 <template>
    <ul>
        <NestedItem 
        v-for="item in nestedMenu"
        :item="item"
        ></NestedItem>
    </ul>
    
 </template>
 <script setup>
import { reactive } from 'vue'
import NestedItem from "./NestedItem.vue";
const nestedMenu = reactive([
    {
      name: "menu level 1",
      child: [
        {
          name: "menu level 2",
        },
        {
          name: "menu level 2",
        },
      ],
    },
    {
      name: "menu level 1",
    },
    {
      name: "menu level 1",
      child: [
        {
          name: "menu level 2",
        },
        {
          name: "menu level 2",
          child: [
            {
              name: "menu level 3",
            },
          ],
        },
      ],
    },
  ]);

</script>
