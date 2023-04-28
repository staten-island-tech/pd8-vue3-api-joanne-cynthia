<template>
  <h1>bar chart</h1>
  <div id="drop-down-menu">
    <h2>filter graph by borough</h2>
    <p>select year:</p>
    <select>
      <option>Manhattan</option>
      <option>Brooklyn</option>
      <option>Bronx</option>
      <option>Staten Island</option>
      <option>Queens</option>
    </select>
  </div>
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

const allboroughs = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
let allArr = []
let allLengths = []
let mData = []
let bklynData = []
let brxData = []
let siData = []
let qData = []

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  console.log(data)
  filterData(data)
}

function filterData(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].animal_class.includes('Birds') && data[i].borough.includes('Manhattan')) {
      mData.push(data[i])
    }
    if (data[i].animal_class.includes('Birds') && data[i].borough.includes('Brooklyn')) {
      bklynData.push(data[i])
    }
    if (data[i].animal_class.includes('Birds') && data[i].borough.includes('Bronx')) {
      brxData.push(data[i])
    }
    if (data[i].animal_class.includes('Birds') && data[i].borough.includes('Staten Island')) {
      siData.push(data[i])
    }
    if (data[i].animal_class.includes('Birds') && data[i].borough.includes('Queens')) {
      qData.push(data[i])
    }
    allArr.push(mData, bklynData, brxData, siData, qData)
    allArr.forEach(
      (arr) =>
        function (arr) {
          let length = arr.length
          console.log(length)
          allLengths.push(length)
        }
    )
  }
}

let chartData = ref({
  labels: allboroughs,
  //labels: ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens'],
  datasets: [
    {
      label: 'total cases of birds rescued',
      //data: allLengths,
      data: [131, 72, 48, 130, 99],
      backgroundColor: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']
    }
  ]
})
onMounted(() => {
  getData()
  console.log()
})
</script>

<style scoped>
.charts {
  width: 1000px;
}
</style>
