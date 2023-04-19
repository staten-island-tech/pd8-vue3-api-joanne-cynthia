<template>
  <h1>homeview</h1>
</template>

<script setup>
import { ref, Created } from 'vue'
const data = ref('')
async function getData() {
  let res = await fetch(
    'https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i'
  )
  let data = await res.json()
  data.value = data.results
}
Created(() => {
  getData()
})
</script>
