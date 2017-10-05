<template lang="pug">
  article
    page-title(title='All Solutions')
    h1 All Solutions
    h2 Active Solutions
    application-list-item(v-for='app in current' :app='app' :key='app.id')
    h2 Past Solutions
    application-list-item(v-for='app in past' :app='app' :key='app.id')
</template>

<script>
import AppData from './AppData.vue'
import ApplicationListItem from './ApplicationListItem.vue'
import PageTitle from './PageTitle.vue'

export default {
  name: 'application-list',
  data: function () {
    return {
      current: AppData.apps.filter(app => app.active && !app.noAboutLink),
      past: AppData.apps.filter(app => !app.active && !app.noAboutLink)
    }
  },
  components: {
    ApplicationListItem,
    PageTitle
  }
}
</script>
