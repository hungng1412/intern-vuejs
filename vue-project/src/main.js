import './assets/main.css'
// import { store } from './Bai3/TodoList/store/todos'
import { dialogStore, todoStore } from './store/index'
import { createApp } from 'vue'
import App from './App.vue'
import router from './Diutup/router'
import i18n from './Bai3/LoginForm/i18n';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App);
todoStore.dispatch('initializeStore');

app.use(ElementPlus)
app.use(i18n)
app.use(router)
app.use(todoStore);
// app.use(dialogStore);
app.mount('#app')

