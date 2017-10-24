<template lang="pug">
div
  page-title(:title='pageTitle')
  h1.
    {{ application.name }}
    #[br]
    <small><small>
      #[a(v-if='application.active || application.linkInactive' :href='application.url') {{ application.url }}]
      #[span(v-if='!application.active && !application.linkInactive') {{ application.url }}]
    </small></small>
  div.app-info
    aside: img(:src='imageLink')
    article.content
      p(v-for='(p, idx) in application.paragraphs' :key='idx' v-html='p')
      div(v-for='(act, idx) in application.activity' :key='idx' :act='act')
        h3 {{ act.heading }}
        p(v-html='act.narrative')
      div(v-if='application.quotes')
        h3 What They Say
        blockquote
          p.quote(v-html='application.quotes.full')
          p.source
            != '&mdash; '
            strong.app-info-heading {{ application.quotes.name }}
            span(v-if='application.quotes.from') , {{ application.quotes.from }}
      p(v-for='(p, idx) in application.footnotes' :key='idx' v-html='p')
      p
        br
        router-link(:to="{ name: 'ApplicationList' }") &laquo; Back to All Solutions
</template>

<script>
import AppData from './AppData.vue'
import PageTitle from './PageTitle.vue'

export default {
  props: ['app'],
  computed: {
    application () {
      return AppData.apps.find(app => app.id === this.$props.app)
    },
    imageLink () {
      return `/static/screenshots/${this.application.id}.png`
    },
    pageTitle () {
      return `${this.application.name} « Solutions`
    }
  },
  components: {
    PageTitle
  }
}
</script>

<style scoped>
h1 {
  line-height: 1.6rem;
}
.app-info {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
}
aside {
  padding-left: 15px;
}
aside img {
  border: dotted 1px darkgray;
  border-radius: 10px;
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
