<template>
  <h1>hello new yorkers</h1>
  <h2>learn more about animal rescure in nyc</h2>
  <div class="charts">
    <Bar :data="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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

const realData = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  realData.value = data
}

let boroughs = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
let mData = []
let bklynData = []
let brxData = []
let siData = []
let qData = []
let totals = ref([''])

function filterData(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].borough.includes('Manhattan')) {
      mData.push(data[i])
    }
    if (data[i].borough.includes('Brooklyn')) {
      bklynData.push(data[i])
    }
    if (data[i].borough.includes('Bronx')) {
      brxData.push(data[i])
    }
    if (data[i].borough.includes('Staten Island')) {
      siData.push(data[i])
    }
    if (data[i].borough.includes('Queens')) {
      qData.push(data[i])
    }
  }
  getTotals()
}

function getTotals() {
  let test = [mData.length, bklynData.length, brxData.length, siData.length, qData.length]
  totals.value = test
  console.log(totals.value)
}

let chartData = ref({
  labels: boroughs,
  datasets: [
    {
      label: 'total rescues of each borough',
      //data: totals.value,
      data: [304, 148, 131, 218, 199],
      backgroundColor: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']
    }
  ]
})

onMounted(() => {
  getData()
})
</script>

<style scoped>
.charts {
  width: 1000px;
}
</style>
