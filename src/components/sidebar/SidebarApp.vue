<template lang="pug">
  div
    p.app-sidebar-name
      strong {{ app.name }}
      br
      span(v-if='!app.noAboutLink').
        #[router-link(:to="{ name: 'Application', params: { app: app.id } }" :title='aboutTitle') About] &bull; 
      a(:title='app.name' :href='app.url') Visit
    p.app-sidebar-description(v-html='app.frontPageText')
</template>

<script lang="ts">
'use strict'

import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { App } from '@/data'

@Component
export default class SidebarApp extends Vue {
  @Prop()
  app!: App

  /** The title attribute for the About link */
  get aboutTitle () {
    return `About ${this.app.name} | Bit Badger Solutions`
  }
}
</script>
