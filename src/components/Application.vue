<template lang="pug">
  article
    page-title(:title="pageTitle")
    h1.
      {{ application.name }}
      #[br]
      <small><small>
        #[a(v-if="application.active || application.linkInactive" :href="application.url") {{ application.url }}]
        #[span(v-if="!application.active && !application.linkInactive") {{ application.url }}]
      </small></small>
    aside: img(:src="imageLink")
    p(v-for="(p, idx) in application.paragraphs" v-bind:key="idx" v-html="p")
    p(v-for="(act, idx) in application.activity" v-bind:key="idx" v-bind:act="act")
      strong {{ act.heading }}
      | &nbsp;&ndash;&nbsp;
      span(v-html="act.narrative")
    template(v-if='application.quotes')
      hr
      strong What They Say
      blockquote
        p.quote(v-html="application.quotes.full")
        p.source.
          &mdash; #[strong {{ application.quotes.name }}], {{ application.quotes.from }}
    p(v-for="(p, idx) in application.footnotes" v-bind:key="idx" v-html="p")
    p
      br
      router-link(:to="{ name: 'ApplicationList' }") &laquo; Back to Web Sites and Applications
</template>

<script>
import AppData from './AppData.vue'
import PageTitle from './PageTitle.vue'

export default {
  props: ['app'],
  data: function () {
    return {}
  },
  computed: {
    application () {
      return AppData.apps.find(app => app.id === this.$props.app)
    },
    imageLink () {
      return `/static/screenshots/${this.application.id}.png`
    },
    pageTitle () {
      return `${this.application.name} « Applications`
    }
  },
  components: {
    PageTitle
  }
}
</script>

<style scoped>
h1 {
  line-height: .75em;
}
aside {
  float: right;
  width: auto;
  padding-left: 15px;
}
aside img {
  border: solid 3px #3A1D00;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
blockquote {
  border-left: solid 1px #3A1D00;
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
