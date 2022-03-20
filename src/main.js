import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VeLine from './v-charts/lib/line.common'
import VeLine from 'v-charts/lib/line.common'
Vue.config.productionTip = false
Vue.component(VeLine.name,VeLine)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
