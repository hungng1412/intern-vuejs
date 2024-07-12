<!-- components/LanguageSwitcher.vue -->
<template>
  <div>
    <p @click="setLanguage('en')">English</p>
    <p @click="setLanguage('vi')">Tiếng Việt</p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const setLanguage = (lang) => {
  locale.value = lang;
};
</script>

<style scoped>
p {
  display: inline-block;
  color: #007bff;
  /* font-size: 1rem; */
  cursor: pointer;
  margin: 1rem 2rem;
  text-decoration: underline;
}

</style>
