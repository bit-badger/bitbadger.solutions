<template lang="pug">
div
  page-title(title='Web Services and API Solutions')
  h1 Web Services and APIs
  article.content.auto
    p.
      A web service is a way of using the Internet to provide or accept information that makes sense to computers; this
      allows other sites or applications to consume information from, or provide information to, your service. This
      enables communication between applications, without having to establish any communication channels other than the
      ones that web browsers already use. It isn't the best fit for every application, but when it is useful, it is
      #[em very] useful.
    p.
      An #[abbr(title='Application Programming Interface') API] can be a synonym for a web service, but it can also be
      a generally accessible way of providing data. For example, Twitter has a public API, which other applications can
      use to display tweets on their site.
    ul
      li: p.
        #[router-link(:to="{ name: 'Application', params: { app: 'photography-by-michelle' } }" title='Photography by Michelle | Bit Badger Solutions') Photography by Michelle]
        had a private web API that a desktop application utilized to create the online proof sets right from the
        computer where the images resided.
      li: p.
        We
        #[a(href='https://blog.bitbadger.solutions/2010/4040-web-service.html' title='40/40 Web Service | The Bit Badger Blog') wrote a service]
        for the 2010
        #[a(href='http://erlc.com/4040/' title='40/40 Prayer Vigil | Ethics and Religious Liberty Commission of the Southern Baptist Convention') 40/40 Prayer Vigil],
        which was utilized by several sites to display the current day's (or hour's) prayer focus, and
        #[a(href='https://blog.bitbadger.solutions/2012/4040-web-service-for-2012.html' title='40/40 Web Service for 2012 | The Bit Badger Blog') wrote one for 2012]
        as well. #[i (As the ERLC does not host these any more, this service is no longer active.)]
      li: p.
        #[a(href='https://prayerjournal.me') myPrayerJournal]
        #[small (#[router-link(:to="{ name: 'Application', params: { app: 'my-prayer-journal' } }" title='myPrayerJournal | Bit Badger Solutions') about])]
        is a #[abbr(title='Single Page Application') SPA] which only downloads the structure of the site the first time
        you go there, then utilizes a stateless API to access data from the browser. 
    p
      br
      router-link(to='/' title='Home') &laquo; Home
</template>
