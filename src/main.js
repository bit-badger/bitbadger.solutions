import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PageTitle from './components/PageTitle'

Vue.config.productionTip = false

Vue.component('page-title', PageTitle)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
