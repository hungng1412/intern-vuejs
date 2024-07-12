<template>
  <div class="container">
    <div class="login-field">
      <h3>{{ $t("welcome") }}</h3>
      <h3>{{ $t("login") }}</h3>
      <input
        :placeholder="$t('username')"
        v-model="userName"
        @keypress.enter="checkInfo"
        required
      />
      <input
        :placeholder="$t('password')"
        v-model="password"
        @keypress.enter="checkInfo"
        type="password"
        required
      />
      <button @click="checkInfo">{{ $t("loginButton") }}</button>
      <router-link to="/forgot-password">{{
        $t("forgotPassword")
      }}</router-link>
      <router-link to="/register">{{ $t("register") }}</router-link>
      <language-switcher></language-switcher>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import LanguageSwitcher from "./LanguageSwitcher.vue";

const store = useStore();

// Sử dụng reactive để chứa dữ liệu database
const amazingDatabase = reactive([
  {
    user: "Hung123",
    password: "hung1405", // Thực tế là bản hash của password
  },
  {
    user: "hngnguyen14",
    password: "hihih1hi",
  },
]);

const userName = ref("");
const password = ref("");

// Sử dụng computed để kiểm tra tài khoản
const isAccountExist = computed(() => {
  return amazingDatabase.some((item) => {
    return item.password === password.value && item.user === userName.value;
  });
});

// Hàm kiểm tra thông tin đăng nhập
function checkInfo() {
  if (isAccountExist.value) {
    showDialog();
    userName.value = "";
    password.value = "";
  } else {
    alert("Vui lòng kiểm tra lại thông tin");
  }
}

const showDialog = () => {
  store.dispatch("showDialog", "Đăng nhập thành công");
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: #f5f5f5; */
}

.login-field {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-field h3 {
  margin: 0 0 1rem;
  color: #333;
}

.login-field input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.login-field input:focus {
  outline: none;
  border-color: #007bff;
}

.login-field button {
  width: 100%;
  padding: 1rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.login-field button:hover {
  background-color: #0056b3;
}

.login-field a {
  color: #007bff;
  text-decoration: none;
  margin: 0 0.5rem;
}

.login-field a:hover {
  text-decoration: underline;
}
</style>
