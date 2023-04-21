<template>
  <div class="card">
    <h2>{{ complaint.sample_number }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    complaint: Object
  }
}
</script>

<style scoped></style>
