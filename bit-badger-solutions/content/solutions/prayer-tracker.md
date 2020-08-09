---
title: PrayerTracker
url: https://prayer.bitbadger.solutions
summary: Provides an ongoing, centralized prayer list for Sunday School classes and other groups
category: Web Sites and Applications
frontPage:
  display: true
  order: 1
  text: A prayer request tracking website (Free for any church or Sunday School class!)
technologies:
  - Giraffe:
      for: server-side logic and dynamic page generation
      isCurrent: true
  - PostgreSQL:
      for: data storage
      isCurrent: true
  - GitHub:
      for: source code control
      isCurrent: true
  - GitHub Pages:
      for: documentation hosting
      isCurrent: true
  - MongoDB:
      for: data storage
  - ASP.NET MVC:
      for: dynamic content generation
  - Database Abstraction:
      for: data access
  - MySQL:
      for: data storage
  - PHP:
      for: dynamic content generation
---
### The Problem

Back in 2005, Daniel was responsible for keeping up with prayer requests for his Sunday School class. However, simply sending out a mass e-mail has some significant drawbacks - everyone&rsquo;s e-mail address is visible to everyone else; mass e-mails are more likely to be flagged as suspicious; and it is difficult to have a single &ldquo;latest and greatest&rdquo; list of members.

### The Solution

We wrote a site so we could enter prayer requests and class members; this site would then send individual e-mails to each member. When requests were 15 days old, they would drop off the list. From there, PrayerTracker has grown to support multiple churches and groups within those churches, and the user interface is available in both English _y Español_. Bit Badger Solutions offers use of this site for free to any church, Sunday School class, or small group that desires a tool to help them establish a continuous list of prayer requests.

<hidden-section heading="The Process">

  The first reimagining of PrayerTracker occurred in 2011; this was when we moved to a more modern (at the time) framework (ASP MVC 3), building in the multi-church/multi-group security additions, and posturing it for an interface with <nuxt-link to="/solutions/virtual-prayer-room" title="Virtual Prayer Room &bull; Bit Badger Solutions">Virtual Prayer Room</nuxt-link>. A year later, a visiting missionary saw the site and liked it, but needed the site (including the online help) in Spanish; we released version 4 a few months later which brought this support.
  
  In late 2014, version 5 moved to a MongoDB data store, as we had some problems with columns not being large enough for some requests. In early 2017, we released version 6, which took PrayerTracker into the .NET Core environment; we also moved the data back to PostgreSQL, as it now supported the sizes we needed.
  
  Version 7 was released in mid-2018, bringing full mobile accessibility and an upgrade to a modern, ultra-fast web framework (Giraffe). In early 2019, version 7.1 was the first release for PrayerTracker as an [open source project](https://github.com/bit-badger/PrayerTracker). Right on its heels, version 7.2 moved the embedded help files to GitHub Pages; this made the web application more streamlined.

</hidden-section>
