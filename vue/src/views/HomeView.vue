<template>
  <h1>hello</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const data = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/fuhs-xmg2.json')
  let data = await res.json()
  data.value = data.results
  console.log(data)
}
onMounted(() => {
  getData()
})
</script>
