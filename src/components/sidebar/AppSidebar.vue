<template lang="pug">
div
  aside.app-sidebar
    div
      div.app-sidebar-head Connect with Us
      p
        a(href='https://twitter.com/DJS_Consulting' title='DJS_Consulting on Twitter') Twitter
        | &nbsp;&bull;&nbsp;
        a(href='https://www.facebook.com/pages/DJS-Consulting/262368048575' title="DJS Consulting on Facebook") Facebook
    sidebar-category(v-for='category in cats' :category='category' :key='category.id')
</template>

<script>
import AppData from '../AppData.vue'
import SidebarCategory from './SidebarCategory.vue'

export default {
  name: 'app-sidebar',
  data () {
    return { cats: AppData.categories }
  },
  components: {
    SidebarCategory
  }
}
</script>

<style>
.app-sidebar {
	text-align: center;
  border-top: dotted 1px lightgray;
	padding-top: 1rem;
	font-size: .9rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.app-sidebar > div {
  width: 20rem;
  padding-bottom: 1rem;
}
@media all and (min-width: 68rem) {
  .app-sidebar {
    width: 66rem;
    margin: auto;
  }
}
@media all and (min-width: 80rem) {
  .app-sidebar {
    width: 12rem;
    border-top: none;
    border-left: dotted 1px lightgray;
    padding-top: 0;
    padding-left: 2rem;
    flex-direction: column;
  }
  .app-sidebar > div {
    width: auto;
  }
}
.app-sidebar a {
	font-size: 10pt;
	font-family: sans-serif;
}
.app-sidebar-head {
	font-family: "Oswald", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
  font-weight: bold;
	color: maroon;
	margin-bottom: .8rem;
	padding: 3px 12px;
	border-bottom: solid 2px lightgray /* #3A1D00 */;
  font-size: 1rem;
}
.app-sidebar-name, .app-sidebar-description {
  margin: 0;
  padding: 0;
}
.app-sidebar-description {
	font-style: italic;
	color: #555555;
	padding-bottom: .6rem;
}
</style>
