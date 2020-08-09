<template>
  <article class="content auto">
    <h1 v-html="page.title" />
    <nuxt-content :document="page" />
    <p><br><nuxt-link to="/" title="Home">&laquo; Home</nuxt-link></p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { siteTitle } from '../index.vue'

export default Vue.extend({
  async asyncData ({ $content, params }) {
    const page = await $content(`about/${params.slug}`).fetch()
    return { page }
  },
  head () {
    return { title: siteTitle((this as any).page.title) }
  }
})
</script>

<style scoped>
li {
  margin-bottom: .8rem;
}
</style>