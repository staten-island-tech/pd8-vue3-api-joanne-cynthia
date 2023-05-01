<template>
  <h1>animal rescues in each borough</h1>
  <h2>filter graph by borough</h2>
  <select id="filterSelect" @click="filterSelect()">
    <option value="all">All Boroughs</option>
    <option value="m">Manhattan</option>
    <option value="bklyn">Brooklyn</option>
    <option value="brx">Bronx</option>
    <option value="si">Staten Island</option>
    <option value="q">Queens</option>
  </select>
  <div class="BarChart">
    <BarChart v-if="loaded" :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'

export default {
  name: 'barView',
  components: { barChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {}
    }
  },
  methods: {
    allSelect: async function () {
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
        let realData = await res.json()
        let labels = ['Manhattan', 'Brooklyn', 'Bronx', 'Staten Island', 'Queens']
        let total = []

        labels.forEach((label) => {
          total.push(realData.filter((el) => el.borough === label).length)
        })

        this.chartData = {
          labels: labels,
          datasets: [
            {
              data: total,
              backgroundColor: '#8e4d4d',
              label: 'total # of rescues'
            }
          ]
        }

        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    },
    filterSelect: async function () {
      try {
        const selection = document.getElementById('filterSelect'.value)
        if (selection == 'All') {
          this.allSelect()
        } else {
          const res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
          let realData = await res.json()
          let labels = [
            'Birds',
            'Terrestrial Reptile or Amphibian',
            'Small Mammals',
            'Deer',
            'Raptors'
          ]
          let filteredData = []
          console.log(realData)

          labels.forEach((label) => {
            filteredData.push(realData.filter((el) => el.animal_class.includes(label)).length)
          })

          this.chartData = {
            labels: labels,
            datasets: [
              {
                data: filteredData,
                backgroundColor: '#8e4d4d',
                label: 'animal class rescued'
              }
            ]
          }

          this.loaded = true
        }
      } catch (error) {
        console.error(error)
      }
    }
  },

  async mounted() {
    this.allSelect()
  }
}
</script>

<style scoped></style>
