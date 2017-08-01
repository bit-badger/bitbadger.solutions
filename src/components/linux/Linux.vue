<template lang="pug">
  article
    page-title(title="Linux Resources")
    h1 Linux Resources
    p We at DJS Consulting love Linux! Below are the resources we provide.
    p.
      &raquo; 
      #[router-link(:to="{ name: 'Averatec' }" title="Installing WBEL4 (RHEL4) on an Averatec 6200 Laptop - DJS Consulting Linux Resources") Installing Linux on an Averatec 6200 Laptop]
    p.
      &raquo; 
      #[router-link(:to="{ name: 'XineRPMs' }" title="xine RPMs for EL / x86_64 Architecture - DJS Consulting Linux Resources") xine RPMs for the x86_64 EL Architecture]
    p.
      &raquo; 
      #[a(href="//hosted.djs-consulting.com/software" title="DJS Consulting Software Repository") DJS Consulting Software Repository]
    p.
      &raquo; 
      #[a(href="//techblog.djs-consulting.com/category/linux" title="Linux - DJS Consulting Tech Blog") Linux posts]
      on the #[a(href="//techblog.djs-consulting.com" title="DJS Consulting Tech Blog") DJS Consulting Tech Blog]
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'linux',
  components: {
    PageTitle
  }
}
</script>
