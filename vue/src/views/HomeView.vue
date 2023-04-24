<template>
  <h1>hello</h1>
</template>

<script>
import { ref, onMounted } from 'vue'
const data = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/qgea-i56i.json')
  let data = await res.json()
  data.value = data.results
}
onMounted(() => {
  getData()
})
</script>
