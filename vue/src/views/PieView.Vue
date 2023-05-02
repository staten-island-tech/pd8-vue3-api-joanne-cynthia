<template>
  <h1>Condition of Animal Rescues in Each Borough</h1>
  <h2>Filter Chart by Borough</h2>

  <select id="filterSelect" @click="filterSelect()">
    <option value="all">All Boroughs</option>
    <option value="Manhattan">Manhattan</option>
    <option value="Brooklyn">Brooklyn</option>
    <option value="Bronx">Bronx</option>
    <option value="Staten Island">Staten Island</option>
    <option value="Queens">Queens</option>
  </select>

  <div class="PieChart">
    <PieChart v-if="loaded" :chartData="chartData" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue'

export default {
  name: 'PieView',
  components: { PieChart },
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
        let conditions = ['Healthy', 'Unhealthy', 'Injured', 'DOA']
        let filteredData = []

        conditions.forEach((condition) => {
          filteredData.push(apiData.filter((el) => el.animal_condition.includes(condition)).length)
        })

        this.chartData = {
          labels: conditions,
          datasets: [
            {
              data: filteredData,
              backgroundColor: ['#B6E2A1', '#FFFBC1', '#FEBE8C', '#F7A4A4']
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
        const selection = document.getElementById('filterSelect').value
        if (selection == 'all') {
          this.allSelect()
        } else {
          const res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
          let realData = await res.json()
          let conditions = ['Healthy', 'Unhealthy', 'Injured', 'DOA']
          let filteredData = []

          let filteredBorough = realData.filter((arr) => arr.borough.includes(selection))

          conditions.forEach((condition) => {
            filteredData.push(
              filteredBorough.filter((el) => el.animal_condition.includes(condition)).length
            )
          })

          this.chartData = {
            labels: conditions,
            datasets: [
              {
                data: filteredData,
                backgroundColor: ['#B6E2A1', '#FFFBC1', '#FEBE8C', '#F7A4A4']
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

<style scoped>
.PieChart {
  width: 500px;
  margin-top: 5rem;
  position: relative;
  left: 50rem;
  bottom: 5rem;
}

h1 {
  font-size: 3rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0rem;
}

#filterSelect,
option {
  font-size: 1.5rem;
  width: 13rem;
}
</style>
