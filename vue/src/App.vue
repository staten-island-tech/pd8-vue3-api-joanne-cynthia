<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/BarView">Bar</RouterLink>
        <RouterLink to="/PieView">Pie</RouterLink>
      </nav>
      <RouterView />
    </div>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0.5rem;
  text-decoration: none;
}
</style>
