import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Application from '@/components/Application'
import ApplicationList from '@/components/ApplicationList'
import FourOhFour from '@/components/FourOhFour'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/applications/:app', name: 'Application', component: Application, props: true },
    { path: '/applications', name: 'ApplicationList', component: ApplicationList },
    { path: '*', name: 'FourOhFour', component: FourOhFour }
  ]
})
