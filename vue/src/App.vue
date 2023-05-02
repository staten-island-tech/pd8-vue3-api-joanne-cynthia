<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Animal Rescue</RouterLink>
        <p>|</p>
        <RouterLink to="/BarView">Animal Classes</RouterLink>
        <p>|</p>
        <RouterLink to="/PieView">Animal Conditions</RouterLink>
      </nav>
      <RouterView />
    </div>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
html,
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0rem 10rem;
}

nav {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  margin: 5rem;
}

nav a,
p {
  margin: 0rem 2rem;
  padding: 2rem;
  text-decoration: none;
  color: #000000;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}
</style>
