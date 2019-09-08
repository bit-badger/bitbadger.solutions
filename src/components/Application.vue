<template lang="pug">
div
  page-title(:title='pageTitle')
  h1.
    {{ application.name }}
    #[br]
    <small><small>
      #[a(v-if='application.isActive || application.linkInactive' :href='application.url') {{ application.url }}]
      #[span(v-if='!application.isActive && !application.linkInactive') {{ application.url }}]
      #[span(v-if='!application.isActive && !application.linkInactive && application.archiveUrl') &nbsp; &nbsp;]
      #[a(v-if='!application.isActive && !application.linkInactive && application.archiveUrl' :href='application.archiveUrl') <small>(Archive)</small>]
    </small></small>
  div.app-info
    aside: img(:src='imageLink')
    article.content
      p(v-for='(p, idx) in application.paragraphs' :key='idx' v-html='p')
      div(v-for='(act, idx) in application.activities' :key='"activity" + idx' :act='act')
        h3 {{ act.heading }}
        p(v-html='act.narrative')
      div(v-if='application.quotes.length > 0')
        h3 What They Say
        blockquote(v-for='(q, idx) in application.quotes' :key='"quote" + idx')
          p.quote(v-html='q.full')
          p.source
            != '&mdash; '
            strong.app-info-heading {{ q.name }}
            span(v-if='q.from') , {{ q.from }}
      p(v-for='(p, idx) in application.footnotes' :key='idx' v-html='p')
      p
        br
        router-link(:to="{ name: 'ApplicationList' }") &laquo; Back to All Solutions
</template>

<script lang="ts">
'use strict'

import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import Data, { App } from '@/data'
import PageTitle from './PageTitle.vue'

@Component({ components: { PageTitle } })
export default class Application extends Vue {
  
  @Prop({ required: true })
  app!: string
  
  get application () {
    return Data.apps.find(app => app.id === this.app)
  }
  get imageLink () {
    return `/screenshots/${this.application!.id}.png`
  }
  get pageTitle () {
    return `${this.application!.name} « Solutions`
  }
}
</script>

<style lang="sass" scoped>
h1
  line-height: 1.6rem
.app-info
  display: flex
  flex-flow: row-reverse wrap
  justify-content: center
aside
  padding-left: 15px
aside img
  border: dotted 1px darkgray
  border-radius: 10px
blockquote
  border-left: solid 1px darkgray
  margin-left: 25px
  padding-left: 15px
.quote
  font-style: italic
.source
  text-align: right
  padding-right: 60px
</style>
