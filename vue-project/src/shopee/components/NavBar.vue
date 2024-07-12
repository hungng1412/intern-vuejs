<template>
  <header>
    <div class="navbar">
      <div class="logo">
        <img src="../img/logo.png" alt="this is a logo" />
      </div>
      <div>
        <ul class="nav-links">
          <li v-for="item in nav" :key="item.name">
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="search">
        <li><input v-model="searchInput" /></li>
        <li>Favorite</li>
        <li>${{ currentCart }}</li>
      </div>
    </div>
  </header>
</template>
<script setup>
import { reactive, ref } from "vue";
const nav = reactive([
  {
    name: "Home",
    url: "#",
  },
  {
    name: "Shop",
    url: "#",
  },
  {
    name: "Pages",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
]);
const currentCart = ref(0);
const searchInput = ref("");
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Navbar styles */
header {
  background: #fff;
  color: #333;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
}

.logo a {
  color: #333;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-size: 1em;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #f29c24;
}

/* Menu icon for mobile */
.menu-icon {
  /* display: none; */
  cursor: pointer;
}

.menu-icon i {
  font-size: 1.5em;
  color: #fff;
}

.search {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search li {
  margin: 5px;
}
/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 60px;
    right: 0;
    height: calc(100vh - 60px);
    width: 100%;
    background: #333;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-links li {
    margin: 0;
  }

  .nav-links a {
    font-size: 1.2em;
  }

  .nav-links.show {
    transform: translateX(0);
  }

  .menu-icon {
    display: block;
  }
}
</style>
