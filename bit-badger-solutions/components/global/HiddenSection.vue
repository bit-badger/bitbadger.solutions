<template>
  <section>
    <h3 @click="toggle()">
      {{ heading }}<span class="arrow" v-html="label"></span>
    </h3>
    <slot v-if="isVisible"></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'hidden-section',
  props: [
    'heading'
  ],
  data () {
    return {
      isVisible: false,
      label: '&#x25BC;'
    }
  },
  methods: {
    toggle () {
      this.isVisible = !this.isVisible
      this.label = this.isVisible ? '&#x25B2;' : '&#x25BC;'
    }
  }
})
</script>

<style scoped>
h3:hover {
  cursor: hand;
  cursor: pointer;
}
.arrow {
  font-size: .75rem;
  padding-left: 1rem;
}
</style>
