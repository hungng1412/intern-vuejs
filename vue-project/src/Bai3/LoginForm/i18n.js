// i18n.js
import { createI18n } from 'vue-i18n';

// Định nghĩa các bản dịch cho các ngôn ngữ khác nhau
const messages = {
  en: {
    welcome: 'Welcome back',
    login: 'Login your account',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    forgotPassword: 'Forgot Password?',
    register: 'Register'
  },
  vi: {
    welcome: 'Chào mừng trở lại',
    login: 'Đăng nhập vào tài khoản của bạn',
    username: 'Tên người dùng',
    password: 'Mật khẩu',
    loginButton: 'Đăng nhập',
    forgotPassword: 'Quên mật khẩu?',
    register: 'Đăng ký'
  }
};

// Tạo đối tượng i18n
const i18n = createI18n({
  locale: 'en', // ngôn ngữ mặc định
  fallbackLocale: 'en', // ngôn ngữ dự phòng
  messages, // bản dịch
});

export default i18n;
