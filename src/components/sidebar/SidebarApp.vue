<template lang="pug">
  div
    p
      strong.sidebar-name {{ app.name }}
      br
      span(v-if="!app.noAboutLink").
        #[router-link(:to="{ name: 'Application', params: { app: app.id } }") About] &bull; 
      a(:title="app.name" :href="app.url") Visit
    .sidebar-description(v-html="app.frontPageText")
</template>

<script>
export default {
  name: 'sidebar-app',
  props: ['app']
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.sidebar-description {
	font-style: italic;
	color: #555555;
	padding-bottom: 3px;
}
</style>
