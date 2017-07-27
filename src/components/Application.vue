<template>
  <article>
    <page-title :title="pageTitle" />
    <h1>{{ application.name }}<br>
      <small><small>
        <a v-if="application.active || application.linkInactive" :href="application.url">{{ application.url }}</a>
        <span v-if="!application.active && !application.linkInactive">{{ application.url }}</span>
      </small></small>
    </h1>
    <aside>
      <img :src="imageLink">
    </aside>
    <p v-for="(p, idx) in application.paragraphs" v-bind:key="idx" v-html="p"></p>
    <p v-for="(act, idx) in application.activity" v-bind:key="idx" v-bind:act="act">
      <strong>{{ act.heading }}</strong> &ndash; <span v-html="act.narrative"></span>
    </p>
    <p v-for="(p, idx) in application.footnotes" v-bind:key="idx" v-html="p"></p>
    <p>
      <br>
      <router-link :to="{ name: 'ApplicationList' }">&laquo; Back to Web Sites and Applications</router-link>
    </p>
  </article>
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
    application: function () {
      return AppData.apps.find(app => app.id === this.$props.app)
    },
    imageLink: function () {
      return `/static/screenshots/${this.application.id}.png`
    },
    pageTitle: function () {
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
</style>
