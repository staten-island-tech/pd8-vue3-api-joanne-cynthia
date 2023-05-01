<template>
  <h1>animal rescues in each borough</h1>
  <div id="drop-down-menu">
    <h2>filter graph by borough</h2>
    <select>
      <option v-for="borough in boroughs">{{ borough }}</option>
    </select>
  </div>

  <div class="barChart">
    <BarChart v-if="loaded" :chartData="chartData" />
  </div>
</template>

<script>
import barChart from '../components/barChart.vue'

export default {
  name: "barView",
  components: { barChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: []
      }
    }
  }
}

methods: {
  allSelect: async function () {
    try {
      const res = await fetch("https://data.cityofnewyork.us/resource/fuhs-xmg2.jso")
      let data = await res.json()
      let labels = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
      let totals = []

      labels.forEach((label) => {
        totals.push(())

      })
    }


  }
}
</script>

<style scoped></style>
