<template lang="pug">
  p
    span.app-name(v-html='app.name')
    | &nbsp;~&nbsp;
    router-link(:to="{ name: 'Application', params: { app: app.id } }") About
    span(v-if='app.isActive') &nbsp;~&nbsp;
      a(:href='app.url') Visit
    span(v-if='!app.isActive && app.archiveUrl') &nbsp;~&nbsp;
      a(:href='app.archiveUrl') Visit
      em &nbsp;(archive)
    br
    span(v-html='app.indexText')
</template>

<script lang="ts">
'use strict'

import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { App } from '@/data'

@Component
export default class ApplicationListItem extends Vue {
  
  @Prop({ required: true })
  app!: App
}
</script>

<style lang="sass" scoped>
.app-name
  font-family: "Oswald", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif
  font-size: 1.3rem
  font-weight: bold
  color: maroon
</style>
