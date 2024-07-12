<template>
  <div id="app">
    <h1>WebSocket Demo</h1>
    <input v-model="message" @keyup.enter="sendMessage" placeholder="Type a message and press Enter" />
    <button @click="sendMessage">Send Message</button>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const ws = ref(null);
const message = ref('');
const messages = ref([]);

const sendMessage = () => {
  if (ws.value && ws.value.readyState === WebSocket.OPEN) {
    ws.value.send(message.value);
    message.value = '';
  }
};

onMounted(() => {
    //khởi tạo kết nối kết nối websocket
  ws.value = new WebSocket('ws://localhost:8080');
// khi kết nối thành công
  ws.value.onopen = () => {
    console.log('Connected to WebSocket server');
  };
// khi nhận message
  ws.value.onmessage = (event) => {
    messages.value.push(event.data);
  };
// khi kết thúc kết nối websocket
  ws.value.onclose = () => {
    console.log('Disconnected from WebSocket server');
  };
// khi có lỗi
  ws.value.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
});

onBeforeUnmount(() => {
  if (ws.value) {
    ws.value.close();
  }
});
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
input {
  padding: 10px;
  font-size: 16px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
}
</style>
