<template lang="pug">
article.content.auto
  page-title(title='Process Automation Solutions')
  h1 Process Automation and User Engagement
  p.
    Computers can be used to augment or automate nearly any process; could you think of generating bank statements,
    processing mailing lists, or tracking orders without some form of automation? We develop web-based solutions to
    automate #[em your] processes, ensuring that your business constraints are satisfied; these systems can run on the
    Internet or your private network. For Internet-facing solutions, we engineer solutions that allow them to interact
    with you securely, presented in an engaging manner. And, by &ldquo;engagement,&rdquo; we are not describing
    intrusive page pop-ups and other #[span.strike marketing gimmicks] web annoyances; we determine an optimal user
    experience for #[em your] customers, and tailor the solution to work for both of you.
  p Several of our solutions fit this description.
  ul
    li: p.
      #[router-link(:to="{ name: 'Application', params: { app: 'virtual-prayer-room' } }" title='Virtual Prayer Room | Bit Badger Solutions') Virtual Prayer Room]
      helped the prayer ministry of
      #[a(href='http://www.hoffmantown.org' title='Hoffmantown Church in Albuquerque, NM') Hoffmantown Church] enable
      their prayer warriors to have access to requests wherever they are, even in their inbox once a day!
    li: p.
      #[router-link(:to="{ name: 'Application', params: { app: 'tcms' } }" title='TCMS | Bit Badger Solutions') TCMS]
      was an application that helped organizations such as
      #[a(href='http://www.loveincabq.org') Love INC of South Albuquerque] connect people with needs to people who can
      help fulfill those needs. TCMS sprung from the
      #[a(href='https://nsx.archive.bitbadger.solutions' title='Not So Extreme Makeover: Community Edition (Archive)') Not So Extreme Makeover: Community Edition]
      in Albuquerque, New Mexico during spring break 2008; we not only developed the public presence, but a private
      system called #[router-link(:to="{ name: 'Application', params: { app: 'nsx' } }" title='NSXapp | Bit Badger Solutions') NSXapp]
      that enabled the management of the volunteers, families, and things for this massive effort.
    li: p.
      We continue to offer #[a(href='https://prayer.djs-consulting.com' title='PrayerTracker') PrayerTracker ]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'prayer-tracker' } }" title='PrayerTracker | Bit Badger Solutions') about])],
      a free-to-use web application that helps Sunday School classes (or other small groups) generate a prayer request
      list; it provides a central place for list management and continuity.
  p
    br
    router-link(to='/' title='Home') &laquo; Home
</template>
