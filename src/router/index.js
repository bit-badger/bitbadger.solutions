import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Application from '@/components/Application'
import ApplicationList from '@/components/ApplicationList'

import Linux from '@/components/linux/Linux'
import Averatec from '@/components/linux/Averatec'
import XineRPMs from '@/components/linux/XineRPMs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/applications/:app', name: 'Application', component: Application, props: true },
    { path: '/applications', name: 'ApplicationList', component: ApplicationList },
    { path: '/linux/installing-wbel4-rhel4-on-an-averatec-6200-laptop', name: 'Averatec', component: Averatec },
    { path: '/linux/xine-rpms-for-el-x86_64-architecture', name: 'XineRPMs', component: XineRPMs },
    { path: '/linux', name: 'Linux', component: Linux }
  ]
})
