<template>
  <h1>Rescues for Animal Classes in Each Borough</h1>
  <h2>Filter Chart by Borough</h2>

  <select id="filterSelect" @click="filterSelect()">
    <option value="all">All Boroughs</option>
    <option value="Manhattan">Manhattan</option>
    <option value="Brooklyn">Brooklyn</option>
    <option value="Bronx">Bronx</option>
    <option value="Staten Island">Staten Island</option>
    <option value="Queens">Queens</option>
  </select>

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
        let animals = [
          'Birds',
          'Coyotes',
          'Deer',
          'Domestic',
          'Fish',
          'Marine Mammals',
          'Marine Reptiles',
          'Raptors',
          'Small Mammals',
          'Terrestrial Reptile or Amphibian'
        ]
        let filteredData = []

        animals.forEach((animal) => {
          filteredData.push(apiData.filter((el) => el.animal_class.includes(animal)).length)
        })

        this.chartData = {
          labels: animals,
          datasets: [
            {
              data: filteredData,
              backgroundColor: [
                '#9e0142',
                '#d53e4f',
                '#f46d43',
                '#fdae61',
                '#fee08b',
                '#e6f598',
                '#abdda4',
                '#66c2a5',
                '#3288bd',
                '#5e4fa2'
              ],
              label: 'Animal Class'
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
          let apiData = await res.json()
          let animals = [
            'Birds',
            'Coyotes',
            'Deer',
            'Domestic',
            'Fish',
            'Marine Mammals',
            'Marine Reptiles',
            'Raptors',
            'Small Mammals',
            'Terrestrial Reptile or Amphibian'
          ]
          let filteredData = []

          let filteredBorough = apiData.filter((arr) => arr.borough.includes(selection))

          animals.forEach((animal) => {
            filteredData.push(
              filteredBorough.filter((el) => el.animal_class.includes(animal)).length
            )
          })

          this.chartData = {
            labels: animals,
            datasets: [
              {
                data: filteredData,
                backgroundColor: [
                  '#9e0142',
                  '#d53e4f',
                  '#f46d43',
                  '#fdae61',
                  '#fee08b',
                  '#e6f598',
                  '#abdda4',
                  '#66c2a5',
                  '#3288bd',
                  '#5e4fa2'
                ],
                label: 'Animal Class'
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
.BarChart {
  width: 100rem;
  margin-top: 5rem;
  position: relative;
  left: 25rem;
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
  font-size: 4rem;
}
</style>
