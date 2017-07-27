<template>
  <article>
    <page-title title="Linux Resources" />
    <h1>Linux Resources</h1>
    <p>We at DJS Consulting love Linux! Below are the resources we provide.</p>
    <p>
      &raquo; <router-link to="/linux/installing-wbel4-rhel4-on-an-averatec-6200-laptop" title="Installing WBEL4 (RHEL4) on an Averatec 6200 Laptop - DJS Consulting Linux Resources">Installing
      Linux on an Averatec 6200 Laptop</router-link>
    </p>
    <p>
      &raquo; <router-link to="/linux/xine-rpms-for-el-x86_64-architecture" title="xine RPMs for EL / x86_64 Architecture - DJS Consulting Linux Resources">xine
      RPMs for the x86_64 EL Architecture</router-link>
    </p>
    <p>
      &raquo; <a href="//hosted.djs-consulting.com/software" title="DJS Consulting Software Repository">DJS Consulting
      Software Repository</a>
    </p>
    <p>
      &raquo; <a href="//techblog.djs-consulting.com/category/linux" title="Linux - DJS Consulting Tech Blog">Linux
      posts</a> on the <a href="//techblog.djs-consulting.com" title="DJS Consulting Tech Blog">DJS Consulting Tech
      Blog</a>
    </p>
  </article>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'linux',
  data: function () {
    return {}
  },
  components: {
    PageTitle
  }
}
</script>
