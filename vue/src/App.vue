<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </header>

  <homeView />
  <h1>app working</h1>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import homeView from './views/HomeView.vue'
</script>

<style scoped></style>
