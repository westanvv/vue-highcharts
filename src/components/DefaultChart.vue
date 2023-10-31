<script setup lang="ts">
import { ref } from "vue";

const chartOptions = ref({
  series: [
    {
      data: [1, 2, 3],
    },
  ],
});
</script>

<template>
  <div class="chart">
    <h2 class="green">DefaultChart</h2>
    <highcharts :options="chartOptions" class="highcharts"></highcharts>
  </div>
</template>
