<template lang="pug">
  div
    p.sidebar-head {{ category.name }}
    sidebar-app(v-for="app in appsForCat(category.id)" v-bind:app="app" v-bind:key="app.id")
</template>

<script>
import AppData from '../AppData.vue'
import SidebarApp from './SidebarApp.vue'

export default {
  name: 'sidebar-category',
  props: ['category'],
  data: function () {
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

<style scoped>
.sidebar-head {
	font-family: "Play", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
  font-weight: bold;
	color: maroon;
	margin: 10px 0;
	padding: 3px 0;
	display:block;
	border-top: solid 1px #3A1D00;
	border-bottom: solid 1px #3A1D00;
}
</style>
