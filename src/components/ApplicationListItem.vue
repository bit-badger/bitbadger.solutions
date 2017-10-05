<template lang="pug">
  p
    span.app-name(v-html='app.name')
    | &nbsp;~&nbsp;
    router-link(:to="{ name: 'Application', params: { app: app.id } }") About
    span(v-if='app.active') &nbsp;~&nbsp;
      a(:href='app.url') Visit
    span(v-if='!app.active && app.archiveUrl') &nbsp;~&nbsp;
      a(:href='app.archiveUrl') Visit
      em &nbsp;(archive)
    br
    span(v-html='app.indexText')
</template>

<script>
export default {
  name: 'application-list-item',
  props: ['app']
}
</script>

<style scoped>
.app-name {
  font-family: "Oswald", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: maroon;
}
</style>
