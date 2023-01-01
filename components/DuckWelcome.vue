<script setup lang="ts">
import { ref } from 'vue'

const message = ref("This is a welcome message!")
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>

</style>

