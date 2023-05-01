<template>
  <h1>animal rescues in each borough</h1>
  <div id="drop-down-menu">
    <h2>filter graph by borough</h2>
    <select>
      <option v-for="borough in boroughs">{{ borough }}</option>
    </select>
  </div>

  <button v-if="yes" @click="yes = !yes">hide graph</button>
  <button v-else @click=";(yes = !yes), filterData(realData)">show graph</button>

  <div class="charts">
    <Bar :data="chartData2" v-if="yes" />
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

let yes = ref(false)
let boroughs = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
let mData = []
let bklynData = []
let brxData = []
let siData = []
let qData = []

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

let chartData2 = ref({
  labels: 0,
  datasets: [
    {
      label: 'animal rescues in x',
      data: 0,
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
