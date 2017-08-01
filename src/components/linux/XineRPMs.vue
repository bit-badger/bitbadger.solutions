<template lang="pug">
  article
    page-title(title="xine RPMs « Linux Resources")
    h1 xine RPMs for EL / x86_64 Architecture
    p.
      The xine RPMs are now distributed through the #[a(href="//techblog.djs-consulting.com") DJS Consulting Tech Blog].
      Information about the RPMs can be found in the
      #[a(href="//techblog.djs-consulting.com/2005/about-the-xine-rpms.html" title="About the xine RPMs") About the xine RPMs]
      post there, including how you can use RSS or Atom feeds to be notified of updated builds.
    p.
      You can also
      #[a(href="//techblog.djs-consulting.com/category/hosted-64-bit-software/xine-rpms" title="xine RPMs") view the list of available RPMs]
      or simply #[a(href="//hosted.djs-consulting.com/software/xine" title="xine RPMs") browse the available xine files].
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'xine-rpms',
  components: {
    PageTitle
  }
}
</script>
