<template>
  <p>
    <span class="app-name" v-html="solution.title"></span>
    ~ <nuxt-link :to="'/solutions/' + solution.slug">About</nuxt-link>
    <span v-if="!solution.isInactive">~ <a :href="solution.url" target="_blank">Visit</a></span>
    <span v-if="solution.isInactive && solution.archiveUrl">
      ~&nbsp;<a :href="solution.archiveUrl" target="_blank">Visit</a><em> (archive)</em>
    </span>
    <br>
    <span v-html="solution.summary"></span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'solution-item',
  props: ['solution']
})
</script>

<style scoped>
.app-name {
  font-family: "Oswald", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: maroon;
}
</style>
