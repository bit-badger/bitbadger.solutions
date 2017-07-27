<template>
  <p>
    <span class="app-name" v-html="app.name"></span> &nbsp;~&nbsp;
    <router-link :to="{ name: 'Application', params: { app: app.id } }">About</router-link>
    <span v-if="app.active"> &nbsp;~&nbsp; <a :href="app.url">Visit</a></span>
    <span v-if="!app.active && app.archiveUrl"> &nbsp;~&nbsp; <a :href="app.archiveUrl">Visit</a> <em>(archive)</em></span><br>
    <span v-html="app.indexText"></span>
  </p>
</template>

<script>
export default {
  name: 'application-list-item',
  props: ['app'],
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.app-name {
  font-family: "Play", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  color: maroon;
}
</style>
