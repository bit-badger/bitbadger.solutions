<template>
  <section>
    <h1>
      {{ solution.title }}<br>
      <small><small>
        <a v-if="!solution.noLink" :href="solution.url" target="_blank">{{ solution.url }}</a>
        <span v-else>{{ solution.url }}</span>
        <span v-if="solution.linkToArchive"> &nbsp;&nbsp;
          <a :href="solution.archiveUrl"><small>(Archive)</small></a>
        </span>
      </small></small>
    </h1>
    <div class="app-info">
      <article class="content">
        <aside>
          <span>&nbsp;</span>
          <img :src="`/screenshots/${solution.slug}.png`" :alt="`Screen shot of ${solution.title}`">
        </aside>
        <nuxt-content :document="solution" />
        <hidden-section v-if="hasTechStack" heading="The Technology Stack" class="tech-stack">
          <template v-if="hasCurrent">
            <p v-if="hasCurrent && hasPrevious">
              <small><strong>Current:</strong></small>
            </p>
            <ul>
              <technology-item v-for="tech in currentTech" :key="tech[0]" :tech="tech" />
            </ul>
          </template>
          <template v-if="hasPrevious">
            <p v-if="hasCurrent && hasPrevious">
              <small><strong>Previously:</strong></small>
            </p>
            <ul>
              <technology-item v-for="tech in previousTech" :key="tech[0]" :tech="tech" />
            </ul>
          </template>
        </hidden-section>
        <p><br><nuxt-link to="/solutions">&laquo; Back to All Solutions</nuxt-link></p>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { siteTitle } from '../../index.vue'

export default Vue.extend({
  async asyncData ({ $content, params }) {
    const solution = await $content(`solutions/${params.id}`).fetch()
    return { solution }
  },
  head () {
    return { title: siteTitle((this as any).solution.title + ' « Solution') }
  },
  computed: {
    /**
     * Does this solution have a technology stack defined?
     * 
     * @returns True if there are technologies defined, false if not
     */
    hasTechStack (): boolean {
      return ((this as any).solution.technologies || []).length > 0
    },
    /**
     * Does this solution have any technology marked as current?
     * 
     * @returns True if there are technologies marked as current, false if not
     */
    hasCurrent (): boolean {
      return (this as any).solution.technologies.filter((x: any) => x[Object.keys(x)[0]].isCurrent).length > 0
    },
    /**
     * Retrieve the current technologies for this solution.
     * 
     * @returns The current technologies for this solution
     */
    currentTech (): [] {
      return (this as any).solution.technologies
        .filter((x: any) => x[Object.keys(x)[0]].isCurrent)
        .map((x: any) => [ Object.keys(x)[0], x[Object.keys(x)[0]].for ])
    },
    /**
     * Does this solutio have any technology not marked as current?
     * 
     * @returns True if there are technologies not marked as current, false if not
     */
    hasPrevious (): boolean {
      return (this as any).solution.technologies.filter((x: any) => !x[Object.keys(x)[0]].isCurrent).length > 0
    },
    /**
     * Retrieve the non-current technologies for this solution.
     * 
     * @returns The non-current technologies for this solution.
     */
    previousTech (): [] {
      return (this as any).solution.technologies
        .filter((x: any) => !x[Object.keys(x)[0]].isCurrent)
        .map((x: any) => [ Object.keys(x)[0], x[Object.keys(x)[0]].for ])
    }
  }
})
</script>

<style scoped>
h1 {
  line-height: 1.6rem;
}
aside {
  float: right;
  background-color: #FFFAFA;
}
aside > span {
  padding-left: .75rem;
}
aside > img {
  overflow: hidden;
  border: dotted 1px darkgray;
  border-radius: 10px;
}
.tech-stack p {
  margin-bottom: 0;
}
.tech-stack ul {
  margin-top: 0;
}
blockquote {
  border-left: solid 1px darkgray;
  margin-left: 25px;
  padding-left: 15px;
}
.quote {
  font-style: italic;
}
.source {
  text-align: right;
  padding-right: 60px;
}
</style>
