<template>
    <!-- #1 -->
     <h1>NESTED MENU</h1>
    <NestedMenu/>
    <!-- #2 -->
    <h1>REALTIME CLOCK</h1>
    <realtime-clock></realtime-clock>
    <!-- #3 -->
    <h1>TODO MVC</h1>
    <add-todo></add-todo>
    <todo-list></todo-list>
    <router-view></router-view>


</template>

<script setup>
import NestedMenu from "./NestedMenu/NestedMenu.vue"
import RealtimeClock from "./RealtimeClock/RealtimeClock.vue";
import AddTodo from "./TodoList/AddTodo.vue";
import TodoList from "./TodoList/TodoList.vue";
import Login from "./LoginForm/Login.vue"
</script>