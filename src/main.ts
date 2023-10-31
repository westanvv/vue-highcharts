import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// @ts-ignore
import Highcharts from "highcharts";
import MapsModule from "highcharts/modules/map";
import StockModule from "highcharts/modules/stock";
import GanttModule from "highcharts/modules/gantt";
import HighchartsVue from "highcharts-vue";

// In order to use Highcharts Maps we need to
// wrap Highcharts with the correct module:
MapsModule(Highcharts);
StockModule(Highcharts)
GanttModule(Highcharts);

const app = createApp(App)

app.use(router)

// Use the HighchartsVue plugin, register <highcharts> component
// @ts-ignore
app.use(HighchartsVue);

app.mount('#app')
