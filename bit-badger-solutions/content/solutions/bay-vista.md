---
title: Bay Vista Baptist Church
url: https://bayvista.org
summary: Southern Baptist church in Biloxi, Mississippi
category: Static Sites
frontPage:
  display: true
  order: 1
  text: Biloxi, Mississippi
technologies:
  - Hugo:
      for: static site generation
      isCurrent: true
  - Azure:
      for: podcast file storage, automated builds, and static site hosting
      isCurrent: true
  - GitHub:
      for: source code control
      isCurrent: true
  - Hexo:
      for: static site generation
  - Jekyll:
      for: static site generation
  - WordPress:
      for: content management
  - MySQL:
      for: data storage
---
### The Client

Bay Vista Baptist Church has served the spiritual needs of Mississippi&rsquo;s Gulf Coast for decades. They emphasize serving their community as well; they were a hub for <abbr title="Federal Emergency Management Agency">FEMA</abbr> during Hurricane Katrina relief and recovery efforts, and they are a relay point for each year&rsquo;s [Operation Christmas Child](https://www.samaritanspurse.org/what-we-do/operation-christmas-child/) campaign.

### The Problem

In late 2013, the authors of their current website were no longer around, and no one could get to the site to update it.

### The Solution

We developed and continue to maintain a fast, static website that can be updated by multiple trained church members. The site also has a repository for their sermons dating back to January 2014, and a podcast feed that gives their ministry a global reach.

<hidden-section heading="The Process">

  Initially, we set up a WordPress-based site, where multiple people could have the ability to maintain the site. We manually downloaded all the publically-accessible parts of their old site, and used that content to form the basis for the new side, updating outdated information along the way. We maintained the same look-and-feel, but soon moved to a more mobile-friendly layout.

  In 2016, we determined that we were the only ones updating the site, so we transformed the site to use a static site generator; this resulted in fast page loads, with automation providing scheduled updates. We also wrote a custom template for the podcast feed, which is also generated as a static file.

  In 2019, we [open sourced](https://github.com/bayvistabc/www.bayvista.org) the site&rsquo;s source code. We also set up Azure Pipelines to automatically build and deploy the site both on demand and on a schedule. Finally, we trained other church members on updating the site&rsquo;s contents and the podcast feed. Although we continue to host the site, the church is now maintaining it themselves.

</hidden-section>
