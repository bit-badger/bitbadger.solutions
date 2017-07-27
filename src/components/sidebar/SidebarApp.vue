<template>
  <div>
    <p>
      <strong class="sidebar-name">{{ app.name }}</strong><br>
      <span v-if="!app.noAboutLink">
        <router-link :to="{ name: 'Application', params: { app: app.id } }">About</router-link> &bull;
      </span>
      <a :title="app.name" :href="app.url">Visit</a>
    </p>
    <div class="sidebar-description" v-html="app.frontPageText"></div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-app',
  props: ['app'],
  data: function () {
    return {}
  }
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
