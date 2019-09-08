<script lang="ts">
'use strict'

import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

/** Provides a way to set the document's title */
@Component
export default class PageTitle extends Vue {
  
  /** The title of the page */
  @Prop({ required: true, default: '' })
  readonly title!: string

  /** Update the title of the page */
  @Watch('title')
  updateTitle () {
    document.title = `${this.title} « Bit Badger Solutions`
  }

  created () {
    this.updateTitle()
  }
  
  render () { return {} }
}
</script>
