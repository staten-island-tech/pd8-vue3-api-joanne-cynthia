<template>
  <h1>Hello New Yorkers</h1>
  <h2>Learn more about animal rescue in NYC!</h2>

  <div class="BarChart">
    <BarChart v-if="loaded" :chartData="chartData" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'

export default {
  name: 'BarView',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: []
      }
    }
  },
  methods: {
    allSelect: async function () {
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
        let apiData = await res.json()
        let boroughs = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
        let filteredData = []

        boroughs.forEach((borough) => {
          filteredData.push(apiData.filter((el) => el.borough === borough).length)
        })

        this.chartData = {
          labels: boroughs,
          datasets: [
            {
              data: filteredData,
              backgroundColor: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'],
              label: 'Total Rescues'
            }
          ]
        }

        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    }
  },

  async mounted() {
    this.allSelect()
  }
}
</script>

<style scoped>
.BarChart {
  width: 1000px;
}
</style>
