---
title: Olivet Baptist Church
url: https://olivet-baptist.org
summary: Southern Baptist church in Gulfport, Mississippi
category: Static Sites
isInactive: true
noLink: true
linkToArchive: true
archiveUrl: https://olivet.archive.bitbadger.solutions
frontPage:
  display: false
technologies:
  - Vue.js:
      for: the user interface for the PWA
  - Hexo:
      for: generating the site's pages
  - Azure:
      for: podcast file storage and archive site hosting
  - WordPress:
      for: content management
  - MySQL:
      for: data storage
---
### The Client

Olivet Baptist Church was a Southern Baptist church in Gulfport, Mississippi, who had seen our work with <nuxt-link to="/solutions/bay-vista" title="Bay Vista Baptist Church &bull; Bit Badger Solutions">Bay Vista</nuxt-link> and wanted something similar.

### The Problem

Olivet had no online presence.

### The Solution

Initially, we set up a WordPress site, configured it, and established a podcast feed; we also advised them on how to register that feed in iTunes. A few years later, we converted the site to behave like an app, where it could be installed as an icon, allowing quick access.

### The Epilogue

When the church closed its doors on February 24th, 2019, we converted the app-behaving site back to a static web site, set up an archive site, and worked with their personnel to ensure that the podcast links are all still available. We continue to host that archive site and podcast content.

<hidden-section heading="The Process">

  In 2014, we registered the domain name for the church. They had expressed a desire to do as much of the content of the site themselves, so we supported them as they worked through its initial setup. After the site was originally set up, though, updates were rare (apart from the weekly podcast episodes), so we converted it to be a statically-generated site.

  In 2018, we modified the site to be a Progressive Web Application (PWA), which allows users to &ldquo;install&rdquo; the site, like an app, to their phone&rsquo;s home screen. The site was also still accessible from the web via a browser. We converted the static content to generate page fragments that the PWA would load, providing the same navigation experience as before.

</hidden-section>
