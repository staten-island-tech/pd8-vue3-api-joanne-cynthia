<template>
  <BarChart />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import homeView from './views/HomeView.vue'
import BarChart from './component/icons/BarChart.vue'
</script>

<script>
export default {
  name: 'App',
  components: { BarChart }
}
</script>

<style scoped></style>
