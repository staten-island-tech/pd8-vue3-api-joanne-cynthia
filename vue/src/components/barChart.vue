<template>
  <Bar id="barChart" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'barChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
