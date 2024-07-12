<template>
    <h1>CRUD</h1>
  <div class="container">
    <div class="inputField">
      <table>
        <tr>
          <td>Filter:</td>
          <td><input type="text" v-model="prefix" /></td>
          <td><button>Filter</button></td>
        </tr>
      </table>
      <select v-model="selected" size="5">
        <option v-for="name in filteredNames" :key="name">
          {{ name }}
        </option>
      </select>
    </div>
    <div class="editField">
      <table>
        <tr>
          <td>Name:</td>
          <td><input type="text" v-model="nameInput" /></td>
        </tr>
        <tr>
          <td>Surname:</td>
          <td><input type="text" v-model="surnameInput" /></td>
        </tr>
      </table>
      <button @click="addItem">Add Name</button>
      <button @click="update">Update</button>
      <button @click="del">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from "vue";
const prefix = ref("");
const nameInput = ref("");
const surnameInput = ref("");
const selected = ref("");
const names = reactive(["Joe, Doe", "Donald, Trump"]);
const filteredNames = computed(() =>
  names.filter((n) => n.toLowerCase().includes(prefix.value.toLowerCase()))
);
watch(selected, (name) => {
  [nameInput.value, surnameInput.value] = name.split(", ");
});

function isValid() {
  return nameInput.value.trim() && surnameInput.value.trim();
}

function addItem() {
    names.push(nameInput.value + ", " + surnameInput.value);
}

function update() {
  if (selected.value) {
    const i = names.indexOf(selected.value);
    names[i] = nameInput.value + ", " + surnameInput.value;
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value);
    names.splice(i, 1);
  }
}
</script>

<style scoped>
.container {
  max-width: fit-content;
  border: 1px solid whitesmoke;
  padding: 15px;
  margin: 10px;
}
select {
  width: 100%;
  display: block;
}
.container {
  display: flex;
}
.inputField {
  flex: 1;
}
.editField {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
