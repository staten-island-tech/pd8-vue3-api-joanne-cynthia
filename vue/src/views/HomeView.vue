<template>
  <h1>home</h1>
  <div class="container">
    <complaintCard
      v-for="complaint in complaint"
      :key="complaint.sample_number"
      :complaint="complaint"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import complaintCard from '../components/icons/complaintCard.vue'

const complaint = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/bkwf-xfky.json')
  let data = await res.json()
  complaint.value = data.results
  console.log(data)
}
onMounted(() => {
  getData()
})
</script>
