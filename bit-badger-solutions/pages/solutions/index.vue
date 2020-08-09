<template>
  <article class="content auto">
    <h1>All Solutions</h1>
    <h2>Active Solutions</h2>
    <solution-item v-for="sln in active" :key="sln.slug" :solution="sln" />
    <h2>Past Solutions</h2>
    <solution-item v-for="sln in inactive" :key="sln.slug" :solution="sln" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { siteTitle } from '../index.vue'

const sortByName = (x: any, y: any): number =>
  x.title.toLowerCase() < y.title.toLowerCase() ? -1 : x.title.toLowerCase() > y.title.toLowerCase() ? 1 : 0

export default Vue.extend({
  async asyncData ({ $content }) {
    const activeSlns = await $content('solutions')
      .where({ isInactive: { $ne: true }, noAboutLink: { $ne: true } }).fetch()
    const inactiveSlns = await $content('solutions')
      .where({ isInactive: true, noAboutLink: { $ne: true } }).fetch()
    const active = activeSlns.sort(sortByName)
    const inactive = inactiveSlns.sort(sortByName)
    return { active, inactive }
  },
  head () {
    return { title: siteTitle('All Solutions') }
  }
})
</script>
