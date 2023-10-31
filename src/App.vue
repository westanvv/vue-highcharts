<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48" />
    <h1>Highcharts examples</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  display: block;
}

h1 {
  font-size: 1.2rem;
  flex-grow: 1;
  font-weight: 500;
}
</style>
