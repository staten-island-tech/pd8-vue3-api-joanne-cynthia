<template>
  <h1>hello</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const complaint = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/qgea-i56i.json')
  let data = await res.json()
  console.log(data)
}
onMounted(() => {
  getData()
})
</script>
