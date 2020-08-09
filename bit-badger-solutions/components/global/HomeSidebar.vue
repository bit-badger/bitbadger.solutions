<template>
  <aside class="app-sidebar">
    <div v-for="cat in sortedCats" :key="cat">
      <div class="app-sidebar-head" v-text="cat" />
      <div v-for="sln in displayForCategegory(cat)" :key="sln.title">
        <p class="app-sidebar-name">
          <strong>{{ sln.title }}</strong><br>
          <span v-if="!sln.noAboutLink">
            <nuxt-link :to="`/solutions/${sln.slug}`" :title="aboutTitle(sln.title)">About</nuxt-link> &bull;
          </span>
          <a :href="sln.url" :title="sln.title" target="_blank">Visit</a>
        </p>
        <p class="app-sidebar-description" v-html="sln.frontPage.text" />
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Sort the categories in a specific order; any not addressed will appear at the bottom.
 */
const categoryOrder = (x: string, y: string) => {
  if (x === 'Web Sites and Applications') { return -1 }
  if (x === 'WordPress' && y !== 'Web Sites and Applications') { return -1 }
  if (x === 'Static Sites' && y !== 'Web Sites and Applications' && y !== 'WordPress') { return -1 }
  return 1
}

export default Vue.extend({
  name: 'home-sidebar',
  props: ['catNames', 'solutions'],
  computed: {
    sortedCats (): string[] {
      return [...this.catNames].sort(categoryOrder)
    }
  },
  methods: {
    displayForCategegory (category: string): any[] {
      return this.solutions
        .filter((x: any) => x.category === category)
        .sort((x: any, y: any) => x.frontPage.order - y.frontPage.order)
    },
    aboutTitle (name: string): string {
      return `About ${name} | Bit Badger Solutions`
    }
  }
})
</script>

<style scoped>
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
  border-bottom: solid 2px lightgray;
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
