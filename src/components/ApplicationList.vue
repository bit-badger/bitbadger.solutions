<template lang="pug">
article.content.auto
  page-title(title='All Solutions')
  h1 All Solutions
  h2 Active Solutions
  application-list-item(v-for='app in current' :app='app' :key='app.id')
  h2 Past Solutions
  application-list-item(v-for='app in past' :app='app' :key='app.id')
</template>

<script lang="ts">
'use strict'

import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Data, { App } from '@/data'
import ApplicationListItem from './ApplicationListItem.vue'
import PageTitle from './PageTitle.vue'

@Component({ components: { ApplicationListItem, PageTitle } })
export default class ApplicationList extends Vue {
  
  /** The currently active applications */
  current: App[] = Data.apps.filter(app => app.isActive && !app.noAboutLink)

  /** The inactive applications */
  past: App[] = Data.apps.filter(app => !app.isActive && !app.noAboutLink)
}
</script>
