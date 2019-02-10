<script>
export default {
  name: 'page-title',
  props: ['title'],
  created () {
    document.title = `${this.title} « Bit Badger Solutions`
  },
  watch: {
    title () {
      document.title = `${this.title} « Bit Badger Solutions`
    }
  },
  render () { return {} }
}
</script>
