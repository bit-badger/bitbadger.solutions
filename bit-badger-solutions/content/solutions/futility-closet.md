---
title: Futility Closet
url: https://www.futilitycloset.com
summary: An idler&rsquo;s miscellany of compendious amusements
category: WordPress
frontPage:
  display: true
  order: 1
  text: An idler&rsquo;s miscellany of compendious amusements
technologies:
  - WordPress:
      for: blogging
      isCurrent: true
  - nginx:
      for: the web server
      isCurrent: true
  - MySQL:
      for: data storage
      isCurrent: true
  - Digital Ocean:
      for: web site hosting
      isCurrent: true
  - Azure:
      for: backup and recovery
      isCurrent: true
  - Rackspace Cloud:
      for: web site hosting
---
### The Client

Futility Closet exists as a place to give people a break from the dullness of work, by providing puzzles, anecdotes, and more. They also publish a weekly podcast highlighting &ldquo;forgotten stories from the pages of history,&rdquo; along with story updates and lateral thinking puzzles.

### The Problem

The site was running on a shared host, but was growing too large for that platform. The site had also suffered regular security breaches.

### The Solution

We architected an environment that would support a Reddit or Slashdot deluge of requests, and moved the site to an implementation of that environment. We continue to maintain that environment and back up data and files for the over 10,000 posts.

### The Business Impact
  
> <p class="quote">Bit Badger Solutions has been an absolute godsend for Futility Closet. We have been with them since 2010, initially setting up and maintaining the site on a Rackspace VPS, and then hosting it completely. Daniel&rsquo;s never failed in being friendly, knowledgeable, thoughtful, and farsighted. I&rsquo;ve literally lost count of the number of times he&rsquo;s saved us from one emergency or another, always with diligence and good humor, or recommended an improvement or a protection that saved us later. We would be out of business many times over if it weren&rsquo;t for his reliability, expertise, and good judgment. And he&rsquo;s a joy to work with.</p>
>
> <p class="source"> &mdash; <strong>Greg Ross</strong>, Futility Closet</p>

<hidden-section heading="The Process">

  In mid-2010, we obtained a backup of the previous site, and looked through it to ensure that none of the breaches had made any permanent changes to the site&rsquo;s structure and data. We also locked down the new server (hosted on Rackspace Cloud) to only required protocols, training the client on SSH so that they could have access. We also stood up nginx as the front-end server, boosting performance significantly while requiring a much smaller server.

  In 2015, we began hosting Futility Closet (using Digital Ocean).

</app-hide-section>
