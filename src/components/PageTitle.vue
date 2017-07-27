<script>
export default {
  name: 'page-title',
  props: ['title'],
  created () {
    document.title = `${this.title} « DJS Consulting`
  },
  watch: {
    title () {
      document.title = `${this.title} « DJS Consulting`
    }
  },
  render () { }
}
</script>
