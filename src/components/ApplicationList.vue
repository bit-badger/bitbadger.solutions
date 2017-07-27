<template>
  <article>
    <page-title title="Applications" />
    <h1>Web Sites and Applications</h1>
    <h2>Current Projects</h2>
    <application-list-item v-for="app in current" v-bind:app="app" v-bind:key="app.id" />
    <h2>Past Projects</h2>
    <application-list-item v-for="app in past" v-bind:app="app" v-bind:key="app.id" />
  </article>
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
