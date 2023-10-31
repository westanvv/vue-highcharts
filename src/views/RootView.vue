<script setup lang="ts">
import DefaultChart from "@/components/DefaultChart.vue";
import StockChart from "@/components/StockChart.vue";
import MapChart from "@/components/MapChart.vue";
import GranttChart from "@/components/GranttChart.vue";
</script>

<template>
  <main>
    <DefaultChart />
    <StockChart />
    <MapChart />
    <GranttChart />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart h2 {
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
}

</style>
