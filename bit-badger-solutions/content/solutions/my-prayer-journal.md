---
title: myPrayerJournal
url: https://prayerjournal.me
summary: Minimalist personal prayer journal
category: Web Sites and Applications
frontPage:
  display: true
  order: 2
  text: Minimalist personal prayer journal
technologies:
  - Vue.js:
      for: the front-end
      isCurrent: true
  - Giraffe:
      for: the back-end data API
      isCurrent: true
  - RavenDB:
      for: data storage
      isCurrent: true
  - GitHub:
      for: source code control
      isCurrent: true
  - GitHub Pages:
      for: documentation
      isCurrent: true
  - PostgreSQL:
      for: data storage
---
### The Problem

Daniel wanted to maintain a prayer journal, where he could record the prayer requests for which he had prayed, and the answer that eventually came to that request. He didn&rsquo;t want to do that on paper for several reasons &ndash; it's easy to lose, a long-running request can run out of space to make notes, etc.

### The Solution

We created a site where users can enter requests, pray through lists of these requests, make notes on them, and follow them through until they are answered. The site stores no identifying information, and works well on both desktop and mobile. Bit Badger Solutions hosts and maintains the instance of the site linked above.

<hidden-section heading="The Process">

  Development of myPrayerJournal began in earnest in early 2017. As we were using this to learn new techniques, we ended up trying a host of different front and back end technologies before settling on Vue.js for the front end and Giraffe for the back end. This combination works well, and we wrote up an 8-post series entitled ["A Tour of myPrayerJournal"](https://blog.bitbadger.solutions/2018/a-tour-of-myprayerjournal/introduction.html "A Tour of myPrayerJournal: Introduction | The Bit Badger Blog") over on the _Bit Badger Blog_ that steps through all aspects of version 1 of this application.

  Version 2 changed to a Material Design interface, and we changed the data store from PostgreSQL to RavenDB, an excellent document database. As this is an open-source project, anyone can review the source code on [GitHub](https://github.com/bit-badger/myPrayerJournal); we also track open issues there.

</app-hide-section>
