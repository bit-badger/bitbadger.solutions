<template lang="pug">
div
  div.app-sidebar-head {{ category.name }}
  sidebar-app(v-for='app in appsForCat(category.id)' :app='app' :key='app.id')
</template>

<script>
import AppData from '../AppData.vue'
import SidebarApp from './SidebarApp.vue'

export default {
  name: 'sidebar-category',
  props: ['category'],
  data () {
    return {
      appsForCat: function (catId) {
        return AppData.apps
          .filter(app => app.active && app.categoryId === catId)
          .sort((a, b) => a.frontPageOrder - b.frontPageOrder)
      }
    }
  },
  components: {
    SidebarApp
  }
}
</script>
