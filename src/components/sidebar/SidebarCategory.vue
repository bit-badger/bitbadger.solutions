<template lang="pug">
div
  div.app-sidebar-head {{ category.name }}
  sidebar-app(v-for='app in appsForCat(category.id)' :app='app' :key='app.id')
</template>

<script lang="ts">
'use strict'

import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import Data, { Category } from '@/data'
import SidebarApp from './SidebarApp.vue'

@Component({ components: { SidebarApp } })
export default class SidebarCategory extends Vue {
  
  @Prop({ required: true })
  category!: Category
  
  appsForCat (catId: number) {
    return Data.apps
      .filter(app => app.isActive && app.categoryId === catId)
      .sort((a, b) => a.frontPageOrder - b.frontPageOrder)
  }
}
</script>
