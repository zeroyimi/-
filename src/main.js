import Vue from 'vue'
import './assets/css/index.css'

// 引进element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 粒子特效
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)

// 引入echarts
import 'echarts'
import ECharts from 'vue-echarts'
Vue.component('ECharts', ECharts)

import App from './App'
import router from './router'


Vue.config.productionTip = false

new Vue({
  el: '#app',  
  router,
  render: h => h(App)
})
