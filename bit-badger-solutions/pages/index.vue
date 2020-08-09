<template>
  <div class="home">
    <article class="content auto">
      <nuxt-content :document="home" />
    </article>
    <home-sidebar :cat-names="catNames" :solutions="slns" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const home = await $content('home').fetch()

    const cats: {category: string}[] = await $content('solutions').only(['category']).fetch()
    const catNames = [...new Set(cats.map(x => x.category))]

    const slns = await $content('solutions').where({ 'frontPage.display': true }).fetch()

    return { home, catNames, slns }
  },
  head () {
    return { title: siteTitle('Welcome!') }
  }
})

/**
 * Construct a title for the site
 * 
 * @param pageTitle The title of the page
 * @returns The page title, with the site title appended
 */
export function siteTitle (pageTitle: string) {
  return `${pageTitle} « Bit Badger Solutions`
}
</script>

<style>
@media all and (min-width: 80rem) {
  .home {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-around;
  }
}
.home-lead {
  font-size: 1.3rem;
  text-align: center;
}
</style>
