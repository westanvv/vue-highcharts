<script setup lang="ts">
import { ref } from "vue";

const chartOptions = ref({
  title: {
    text: "Gantt Chart with Progress Indicators",
  },

  xAxis: {
    min: Date.UTC(2014, 10, 17),
    max: Date.UTC(2014, 10, 30),
  },

  series: [
    {
      name: "Project 1",
      data: [
        {
          name: "Start prototype",
          start: Date.UTC(2014, 10, 18),
          end: Date.UTC(2014, 10, 25),
          completed: 0.25,
        },
        {
          name: "Test prototype",
          start: Date.UTC(2014, 10, 27),
          end: Date.UTC(2014, 10, 29),
        },
        {
          name: "Develop",
          start: Date.UTC(2014, 10, 20),
          end: Date.UTC(2014, 10, 25),
          completed: {
            amount: 0.12,
            fill: "#fa0",
          },
        },
        {
          name: "Run acceptance tests",
          start: Date.UTC(2014, 10, 23),
          end: Date.UTC(2014, 10, 26),
        },
      ],
    },
  ],
});
</script>

<template>
  <div class="chart">
    <h2 class="green">GranttChart</h2>
    <highcharts class="highcharts" :options="chartOptions" :constructor-type="'ganttChart'"></highcharts>
  </div>
</template>
