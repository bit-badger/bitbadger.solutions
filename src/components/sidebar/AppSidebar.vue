<template lang="pug">
  aside
    sidebar-category(v-for="category in cats" v-bind:category="category" v-bind:key="category.id")
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

<style scoped>
aside {
	width: 200px;
	float: right;
	font-size: 1em;
	text-align: center;
	background-color: white;
	border: solid 2px navy;
	border-right: none;
  border-radius: 10px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	margin-left:3px;
	margin-right: -15px;
	padding-left: 3px;
	padding-right: 3px;
	font-size: 80%;
	clear: both;
}
aside a {
	font-size: 10pt;
	font-family: sans-serif;
}
.widget-projects hr {
	border-color: #3A1D00;
}
aside p {
    margin: 0;
}

</style>
