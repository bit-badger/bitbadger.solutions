import { App, Activity, Category, Quote, Technology } from './application.types'

/** A Word from the Word */
const aWordFromTheWord = new App('a-word-from-the-word', 'A Word from the Word', 'https://devotions.summershome.org')
aWordFromTheWord.categoryId = Category.PERSONAL
aWordFromTheWord.noAboutLink = true
aWordFromTheWord.frontPageText = 'Devotions by Daniel'
aWordFromTheWord.frontPageOrder = 2

/** Bay Vista Baptist Church */
const bayVista = new App('bay-vista', 'Bay Vista Baptist Church', 'https://bayvista.org')
bayVista.categoryId = Category.STATIC
bayVista.frontPageText = 'Biloxi, Mississippi'
bayVista.frontPageOrder = 1
bayVista.indexText = 'Southern Baptist church in Biloxi, Mississippi'
bayVista.techStack = [
  new Technology('Hexo', 'static site generation'),
  new Technology('Azure', 'podcast file storage and automated builds')
]

/** Cassy Fiano */
const cassyFiano = new App('cassy-fiano', 'Cassy Fiano', 'http://www.cassyfiano.com')
cassyFiano.isActive = false
cassyFiano.categoryId = Category.WORDPRESS
cassyFiano.indexText = 'A &ldquo;rising star&rdquo; conservative blogger'
cassyFiano.techStack = [ new Technology('WordPress', 'blogging (with a custom theme)') ]

/** Daniel J. Summers */
const danielJSummers = new App('daniel-j-summers', 'Daniel J. Summers', 'https://daniel.summershome.org')
danielJSummers.categoryId = Category.PERSONAL
danielJSummers.noAboutLink = true
danielJSummers.frontPageText = 'Daniel&rsquo;s personal blog',
danielJSummers.frontPageOrder = 1

/** Dr. Melissa Clouthier */
const drMelissaClouthier = new App('dr-melissa-clouthier', 'Dr. Melissa Clouthier', 'http://melissablogs.com')
drMelissaClouthier.isActive = false
drMelissaClouthier.categoryId = Category.WORDPRESS
drMelissaClouthier.frontPageText = 'Information Pollination'
drMelissaClouthier.frontPageOrder = 1
drMelissaClouthier.indexText = 'Politics, health, podcasts and more'
drMelissaClouthier.techStack = [ new Technology('WordPress', 'blogging (with a custom theme)') ]

/** Emerald Mountain Christian School */
const emcs = new App('emerald-mountain-christian-school', 'Emerald Mountain Christian School',
  'http://www.emeraldmountainchristianschool.org')
emcs.isActive = false
emcs.linkInactive = true
emcs.indexText = 'Classical, Christ-centered education near Wetumpka, Alabama'
emcs.techStack = [
  new Technology('ASP.NET MVC', 'page generation and interactivity'),
  new Technology('PostgreSQL', 'data storage')
]

/** Futility Closet */
const futilityCloset = new App('futility-closet', 'Futility Closet', 'https://www.futilitycloset.com')
futilityCloset.categoryId = Category.WORDPRESS
futilityCloset.frontPageText = 'An idler&rsquo;s miscellany of compendious amusements'
futilityCloset.frontPageOrder = 2
futilityCloset.indexText = 'An idler&rsquo;s miscellany of compendious amusements'
const fcQuote = new Quote('Greg Ross', 'Futility Closet')
fcQuote.full =
  `Bit Badger Solutions has been an absolute godsend for Futility Closet. We have been with them since 2010, initially
   setting up and maintaining the site on a Rackspace VPS, and then hosting it completely. Daniel&rsquo;s never failed
   in being friendly, knowledgeable, thoughtful, and farsighted. I&rsquo;ve literally lost count of the number of times
   he&rsquo;s saved us from one emergency or another, always with diligence and good humor, or recommended an
   improvement or a protection that saved us later. We would be out of business many times over if it weren&rsquo;t for
   his reliability, expertise, and good judgment. And he&rsquo;s a joy to work with.`
fcQuote.pull = [
  `Daniel&rsquo;s never failed in being friendly, knowledgeable, thoughtful, and farsighted&hellip;`,
  `We would be out of business many times over if it weren&rsquo;t for his reliability, expertise, and good
   judgment&hellip;`
  ]
futilityCloset.quotes.push(fcQuote)
futilityCloset.techStack = [
  new Technology('WordPress', 'blogging'),
  new Technology('nginx', 'the web server')
]

/** Hard Corps Wife */
const hardCorpsWife = new App('hard-corps-wife', 'Hard Corps Wife', 'http://www.hardcorpswife.com')
hardCorpsWife.isActive = false
hardCorpsWife.categoryId = Category.WORDPRESS
hardCorpsWife.indexText = 'Cassy&rsquo;s life as a Marine wife'
hardCorpsWife.techStack = [ new Technology('WordPress', 'blogging') ]

/** Liberty Pundits */
const libertyPundits = new App('liberty-pundits', 'Liberty Pundits', 'http://libertypundits.net')
libertyPundits.isActive = false
libertyPundits.categoryId = Category.WORDPRESS
libertyPundits.indexText = 'The home for conservatives'
libertyPundits.techStack = [
  new Technology('WordPress', 'blogging'),
  new Technology('Custom software', 'data migration')
]

/** Linux Resources */
const linuxResources = new App('linux', 'Linux Resources', 'https://blog.bitbadger.solutions/linux/')
linuxResources.noAboutLink = true
linuxResources.frontPageText = 'Handy information for Linux folks'
linuxResources.frontPageOrder = 3

/** Mindy Mackenzie */
const mindyMackenzie = new App('mindy-mackenzie', 'Mindy Mackenzie', 'https://mindymackenzie.com')
mindyMackenzie.categoryId = Category.WORDPRESS
mindyMackenzie.frontPageText = 'WSJ-best-selling author of The Courage Solution'
mindyMackenzie.frontPageOrder = 3
mindyMackenzie.indexText = '<em>Wall Street Journal</em> best-selling author and C-suite advisor'
mindyMackenzie.paragraphs = [
  `Mindy Mackenzie, the prior Chief Performance Officer of Beam, Inc., is known as the &ldquo;Velvet Hammer&rdquo;
   for her tough-yet-caring style of leadership. Her <em>Wall Street Journal</em> best-selling book <em>The Courage
   Solution: The Power of Truth-Telling with Your Boss, Peers, and Team</em> details her spin-free approach to personal
   and business success.`
]
mindyMackenzie.activities = [
  new Activity('What We Did (2015)',
    `We assumed maintenance of her site several months in advance of the book launch of <em>The Courage Solution</em>.
     We worked with her, and her publicists and other professionals, to ensure that the book launch went smoothly. We
     customized her WordPress installation to support her Media Appearances in a way that allowed them to be entered,
     tracked, and listed as of the date they occurred. We also implemented rotating videos on the front page of the
     site.`),
  new Activity('What We Did (2018)',
    `We developed the pages for her <em>You First Integrative Leadership Summit</em>, with speaker bios, conference
     schedule, and an application form.`),
  new Activity('What We Still Do',
    'We continue to provide backups, WordPress support, and content updates for Mindy&rsquo;s site.')
]
const mmQuote = new Quote('Mindy Mackenzie', '')
mmQuote.full =
  `Daniel is the best partner you could hope for in a web designer and for handling web maintenance! He is smart,
   creative, resourceful and fast. Daniel is able to produce high quality work on short time frames and with minimal
   creative direction and hit the mark over and over. The best part, is Daniel is a joy to work with. He is smart,
   customer-centric and trustworthy. If he says he will get it done, he does. After having a poor experience with
   another firm, I can highly recommend Daniel for all your website design and support needs – he&rsquo;s terrific!`
mmQuote.pull = [
  '&hellip;Daniel is able to produce high quality work on short time frames&hellip;',
  '[Daniel] is smart, customer-centric and trustworthy.'
]
mindyMackenzie.quotes.push(mmQuote)
mindyMackenzie.techStack = [
  new Technology('WordPress', 'blogging'),
  new Technology('nginx', 'the web server')
]

/** myPrayerJournal */
const myPrayerJournal = new App('my-prayer-journal', 'myPrayerJournal', 'https://prayerjournal.me')
myPrayerJournal.frontPageText = 'Minimalist personal prayer journal'
myPrayerJournal.frontPageOrder = 2
myPrayerJournal.indexText = 'Minimalist personal prayer journal'
myPrayerJournal.paragraphs = [
  `Daniel wanted to maintain a prayer journal, where he could record the prayer requests for which he had prayed, and
   the answer that eventually came to that request. He didn't want to do that on paper for several reasons - it's easy
   to lose, a long-running request can run out of space to make notes, etc. He believed that he was not the only person
   who felt this way regarding prayer, and decided to use this as an opportunity to fill both a spiritual and a learning
   need. Given <a href="https://auth0.com">Auth0</a>'s policy of offering free authentication services for open-source
   applications, he decided to develop this as an open-source application.`,
  `The goal of myPrayerJournal is to get out of the way, so that the user can focus on the requests and their prayer;
   once requests have been entered, the journal provides a way to easily pray through these requests, helping people not
   forget about active requests. It also provides a means of going back through answered requests, which can be reviewed
   whenever the user desires. There is a <a href="https://bit-badger.github.io/myPrayerJournal">documentation page</a>
   that fully describes all it can do.`,
  `As an open-source project, anyone can review the source code on
   <a href="https://github.com/bit-badger/myPrayerJournal">GitHub</a>; we also track open issues there.`
]
myPrayerJournal.activities = [
  new Activity('What We Did (2017-2018)',
    `We went through several iterations of front-end and back-end technologies, trying to find one that would provide
     the optimal experience for praying through the list. The front end uses <a href="https://vuejs.org">Vue.js</a>, and
     the back end uses <a href="https://github.com/giraffe-fsharp/Giraffe">Giraffe</a> to serve the data.`),
  new Activity('What We Still Do',
    `Bit Badger Solutions hosts the instance of this at the URL linked above. We back up the data, and also continue to
     develop it. Anyone can use it by logging in with a Google or Microsoft account.`)
]
myPrayerJournal.techStack = [
  new Technology('Vue', 'the front-end'),
  new Technology('Giraffe', 'the back-end data API'),
  new Technology('PostgreSQL', 'data storage')
]

/** Not So Extreme Makeover: Community Edition */
const nsx = new App('nsx', 'Not So Extreme Makeover: Community Edition', 'http://notsoextreme.org')
nsx.isActive = false
nsx.archiveUrl = 'https://nsx.archive.bitbadger.solutions'
nsx.indexText =
  'Public site for the makeover; provides event-driven management of volunteers, donations, and families needing help'
nsx.paragraphs = [
  `In January 2008, a few members of <a href="http://hoffmantown.org" title="Hoffmantown Church">Hoffmantown Church</a>
   in Albuquerque, New Mexico had an idea. The ABC show
   <em><a href="http://abc.go.com/shows/extreme-makeover-home-edition">Extreme Makeover: Home Edition</a></em> had just
   done <a href="http://abc.go.com/shows/extreme-makeover-home-edition/episode-detail/martinez-family/224884"
   title="Martinez Family &bull; Extreme Makeover: Home Edition">a build for a pastor in the &ldquo;war zone&rdquo; area
   of town</a>, and this brought attention to Gerald Martinez and the work he had done to help clean up this area of
   town. Through <a href="http://www.loveincabq.org/" title="Love INC of South Albuquerque">Love INC of South
   Albuquerque</a>, they learned that there were many other homes in that area that could use the &ldquo;Ty Pennington
   touch.&rdquo; While the goal was not to knock down homes and build new ones, the goal was no less extreme. The goal
   of the &ldquo;Not So Extreme Makeover: Community Edition&rdquo; was to help 50 families in 5 days during spring break
   week in 2008. From an idea in January to 57 families helped by March 29th, it was an amazing whirlwind.`
]
nsx.activities = [
  new Activity('What We Did',
    `The call went out for the need for &ldquo;everything from carpenters to computer nerds,&rdquo; and Daniel thought,
     &ldquo;Hey, I&rsquo;m a computer nerd!&rdquo; We obtained the domain name and stood up the public website quickly
     using WordPress, which also allowed the coordinators to put content up. We next began developing an application
     (NSXapp) where volunteers could sign up for &ldquo;X Week&rdquo;, with over 80 different skill, talent, and ability
     categories. We then created a way to identify families and their needs, and a place for people with donations to
     let us know what they would be. From there, we created the ability to begin matching needs with goods (stuff) and
     abilities (people), organizing the stuff into donated trailers and people into teams. During X Week, we generated
     schedules and reports that were used to track the execution of the project.<br><br>After we recovered, Love INC
     expressed an interest in a version that would allow them to handle these same areas on an ongoing basis; this was
     the genesis of <a href="/solutions/tcms"
     title="The Clearinghouse Management System | Bit Badger Solutions">TCMS</a>.`),
  new Activity('What We Still Do',
    `NSXapp was officially decommissioned in 2012. (It still exists in archived form, if a need arises to use it again.)
     A <a href="https://nsx.archive.bitbadger.solutions"> snapshot of the NSX public site</a> remains as a record of
     what happened those three months in 2008.`)
]
nsx.techStack = [
  new Technology('WordPress', 'content management'),
  new Technology('Custom PHP code', 'NSXapp'),
  new Technology('PostgreSQL', 'data storage')
]

/** Olivet Baptist Church */
const olivet = new App('olivet-baptist', 'Olivet Baptist Church', 'https://olivet-baptist.org')
olivet.isActive = false
olivet.archiveUrl = 'https://olivet.archive.bitbadger.solutions'
olivet.categoryId = Category.STATIC
olivet.indexText = 'Southern Baptist church in Gulfport, Mississippi'
olivet.paragraphs = [
  `Olivet Baptist Church&rsquo;s pastor saw our work with <a href="/solutions/bay-vista"
   title="Bay Vista Baptist Church | Bit Badger Solutions">Bay Vista</a>, and asked us what would be involved with
   setting up something similar for his church. Olivet did not currently have a website.`
]
olivet.activities = [
  new Activity('What We Did (2014)',
    `We registered the domain name for the church, then set up a fresh WordPress install. They had expressed a desire to
     do as much of the content of the site themselves, so we supported them as they worked through its initial setup. We
     also, as with Bay Vista, established the framework for a sermon podcast feed.`),
  new Activity('What We Did (2016)',
    `As with Bay Vista&rsquo;s site, this was converted to be a statically-generated site. We also created a
     mobile-friendly site layout that looked similar to the one they had been using.`),
  new Activity('What We Did (2018)',
    `We turned their site into a Progressive Web Application (PWA), which allows users to &ldquo;install&rdquo; the
     site, like an app, to their phone&rsquo;s home screen. The site is also still accessible from the web via a
     browser.`),
  new Activity('What We Did (2019)',
    `The church closed its doors February 24th, 2019. We converted the PWA back to a static web site, set up a static
     archive site, and worked with their personnel to ensure that the podcast links are all still available. We continue
     to host that archive site and podcast content.`)
]
olivet.techStack = [
  new Technology('Vue', 'the user interface for the PWA'),
  new Technology('Hexo', `generating the site's pages`),
  new Technology('Azure', 'podcast file storage')
]

/** Photography by Michelle */
const photographyByMichelle = new App('photography-by-michelle', 'Photography by Michelle',
  'https://www.summershome.org')
photographyByMichelle.isActive = false
photographyByMichelle.linkInactive = true
photographyByMichelle.indexText = 'Photography services in Albuquerque, New Mexico'
photographyByMichelle.paragraphs = [
  `Michelle Summers had been photographing her children for years. When her sons were on sports teams, she was
   disappointed with the cost of team photography, and felt that she could do a better job at a lower cost. Thus was
   born Photography by Michelle. She specializes in outdoor photography of families, children, and sports teams, as well
   as maternity photography and holiday cards.`
]
photographyByMichelle.activities = [
  new Activity('What We Did (2007)',
    `We created the site with a few custom pages, including a gallery page that would automatically display whatever
     pictures were there. We also, using WordPress and a custom image plugin, set up a site where customers can view the
     proofs from their photography session.`),
  new Activity('What We Did (2012)',
    `The custom PHP/WordPress site was replaced by a custom ASP MVC web application, which handles the front pages and
    the proof set galleries. The proof display was also upgraded to allow cursor-key navigation of proofs.`),
  new Activity('What We Still Do',
    `As Michelle is no longer doing professional photography, the current version of this site is a simple thank-you to
    her customers over the years.`)
]
photographyByMichelle.techStack = [ new Technology('ASP.NET MVC', 'content management') ]

/** PrayerTracker */
const prayerTracker = new App('prayer-tracker', 'PrayerTracker', 'https://prayer.bitbadger.solutions')
prayerTracker.frontPageText = 'A prayer request tracking website (Free for any church or Sunday School class!)'
prayerTracker.frontPageOrder = 1
prayerTracker.indexText = 'Provides an ongoing, centralized prayer list for Sunday School classes and other groups'
prayerTracker.paragraphs = [
  `Years ago, Daniel was responsible for keeping up with prayer requests for his Sunday School class. To help him keep
   up with requests, automatically drop requests that were old, and track long-term requests, he wrote a custom app made
   up of a few pages. Over time, he added security mechanisms and other options, arriving at the site that exists today.
   It is provided free for the asking to any church, Sunday School class, or small group that desires a tool to help
   them establish a continuous list of prayer requests.`
]
prayerTracker.activities = [
  new Activity('What We Did (2005)', 'Created the original site.'),
  new Activity('What We Did (2011)',
    `We rewrote this application using a more modern (at the time) framework (ASP MVC 3), building the security
     additions from the ground up, and posturing it for an interface with <a href="/solutions/virtual-prayer-room"
     title="Virtual Prayer Room | Bit Badger Solutions">Virtual Prayer Room</a>.`),
  new Activity('What We Did (2012)',
    'In April 2012, version 4 was released with support for Spanish - our first multi-lingual application!'),
  new Activity('What We Did (2018)',
    'Version 7 brought full mobile accessibility, along with an upgrade to a modern, ultra-fast web framework.'),
  new Activity('What We Did (2019)',
    'PrayerTracker became <a href="https://github.com/bit-badger/PrayerTracker">an open source project</a>.'),
  new Activity('What We Still Do', 'Host and maintain this application.')
]
prayerTracker.techStack = [
  new Technology('Giraffe', 'server-side logic and dynamic page generation'),
  new Technology('PostgreSQL', 'data storage')
]

/** Riehl World News */
const riehlWorldNews = new App('riehl-world-news', 'Riehl World News', 'http://riehlworldview.com')
riehlWorldNews.categoryId = Category.WORDPRESS
riehlWorldNews.frontPageText = 'Riehl news for real people'
riehlWorldNews.frontPageOrder = 4
riehlWorldNews.indexText = 'Riehl news for real people'
riehlWorldNews.paragraphs = [
  `Dan Riehl began blogging as &ldquo;The Carnivorous Conservative&rdquo; back in 2004, specializing in the areas of
   crime and politics. He changed to &ldquo;Riehl World View&rdquo; a short time later, and writes both news and opinion
   pieces. He was a prolific blogger, publishing over 15 posts a day on most days. He wanted to take his blog in a
   different direction, and was having trouble getting his Movable Type blog do move with him.`
]
riehlWorldNews.activities = [
  new Activity('What We Did (2012)',
    `We spoke with him regarding his ideal direction and assisted through the selection and customization of his
     eventual chosen theme. We also did some work on the customization of that theme. Additionally, we imported the
     large volume of posts from the Movable Type blog into his new WordPress blog.`),
  new Activity('What We Did (2018)',
    `Dan wanted a fresh start for Riehl World View, so we generated flat files to preserve his prior archive. The post
     volume meant that none of the existing WordPress plugins that do that would work, so we built a custom converter
     to preserve that content.`),
  new Activity('What We Still Do',
    'Bit Badger Solutions continues to provide backups and WordPress updates for Riehl World News.')
]
riehlWorldNews.techStack = [
  new Technology('WordPress', 'blogging'),
  new Technology('Custom F# code', 'archive static page generation')
]

/** The Clearinghouse Management System */
var tcms = new App('tcms', 'The Clearinghouse Management System', 'http://tcms.us')
tcms.isActive = false
tcms.indexText =
  'Assists a needs clearinghouse in connecting people with needs to people that can help meet those needs'
tcms.paragraphs = [
  `The TCMS motto, &ldquo;Putting People Over Paperwork,&rdquo; sums up the mission of this system. To successfully run
   a needs clearinghouse, such as those run by Love INC affiliates, there is a lot of paperwork involved. Clients must
   be tracked, along with their needs; these needs must be verified; resources for goods and services must be known;
   volunteers must be known and sent communications to keep them involved. All of this adds up to a significant
   recordkeeping (i.e., paperwork) burden.`,
  `TCMS addressed these issues by providing a repository for all clearinghouse operation needs. It helped eliminate
   duplication of work, and also linke clients with goods and services. It also provided the means to communicate with
   volunteers, either en masse or using selective criteria. This allowed the recordkeeping requirement to be smaller
   and quicker, giving more time for the actual helping of clients. It used WordPress for its front end; this provided
   organizations with a web presence that they could maintain without having to employ a web guru, using
   WordPress&rsquo;s <abbr title="What You See Is What You Get">WYSIWYG</abbr> editor and management tools.`,
  `TCMS was decommissioned in 2014.`
]
tcms.techStack = [
  new Technology('Custom PHP code', 'the application logic'),
  new Technology('WordPress', 'publicly-facing pages and authentication'),
  new Technology('PostgreSQL', 'application data storage')
]

/** The Bit Badger Blog */
const techBlog = new App('tech-blog', 'The Bit Badger Blog', 'https://blog.bitbadger.solutions')
techBlog.categoryId = Category.STATIC
techBlog.frontPageText = 'Technical information (&ldquo;geek stuff&rdquo;) from Bit Badger Solutions'
techBlog.frontPageOrder = 3
techBlog.indexText = 'Geek stuff from Bit Badger Solutions'
techBlog.paragraphs = [
  `The Bit Badger Blog grew from Daniel&rsquo;s personal experience with learning and using the Linux operating system.
   His first experience with blogging consisted of pages that had to be edited every time a new post was made. The
   initial posts were titled &ldquo;My Linux Adventure,&rdquo; and existed as a copy of this home-grown blog. The Bit
   Badger Blog has that, plus tech tips regarding many different computer products. It covers web servers, databases,
   programming languages, and open-source software. Bit Badger Solutions also hosts 64-bit RPM builds of xine, a Linux
   multimedia player; the blog, via the RSS feed for that category, can deliver notices of updated versions directly to
   subscribed users. Finally, it also contains notices of new versions of Bit Badger Solutions-developed WordPress
   plug-ins (&ldquo;Daniel&rsquo;s Dropdowns&rdquo; <em>(inactive, as its functionality is now part of the WordPress
    core)</em> and &ldquo;HCSB Verse of the Day (Plus)&rdquo;).`,
  `It is currently a statically-generated site, utilizing <a href="https://hexo.io">Hexo</a>, and its code is
   <a href="https://github.com/bit-badger/blog.bitbadger.solutions">open source</a>.`
]
techBlog.techStack = [ new Technology('Hexo', 'static site generation') ]

/** The Shark Tank */
const theSharkTank = new App('the-shark-tank', 'The Shark Tank', 'http://shark-tank.net')
theSharkTank.isActive = false
theSharkTank.categoryId = Category.WORDPRESS
theSharkTank.indexText = 'Florida’s political feeding frenzy'
theSharkTank.paragraphs = [
  `The Shark Tank is a news and opinion site centered on south Florida politics (and the state at large). They provided
   extensive coverage of Rep. Allen West&rsquo;s winning campaign in 2010, and are continuing their focused news and
   opinion to current political races.`
]
theSharkTank.activities = [
  new Activity('What We Did',
    `They were displeased with their current theme, and had found a theme (and a demo site) that they preferred. We set
     up the theme, ensured that their content would fit in the new theme&rsquo;s requirements, and helped them turn off
     parts that they didn&rsquo;t need. We also converted the social media connections from their old site to a style
     that would work nicely in the new theme.`)
]

/** Virtual Prayer Room */
const vpr = new App('virtual-prayer-room', 'Virtual Prayer Room', 'https://virtualprayerroom.us')
vpr.isActive = false
vpr.indexText = 'Gives prayer warriors access to requests from wherever they may be, and sends them daily updates'
vpr.techStack = [
  new Technology('Custom PHP code', 'the application'),
  new Technology('PostgreSQL', 'data storage')
]

export default {
  
  /** All categories */
  categories: [
    new Category(Category.SITES_APPS, 'Web Sites and Applications'),
    new Category(Category.WORDPRESS, 'WordPress'),
    new Category(Category.STATIC, 'Static Sites'),
    new Category(Category.PERSONAL, 'Personal')
  ],

  /** All apps */
  apps: [
    aWordFromTheWord,
    bayVista,
    cassyFiano,
    danielJSummers,
    drMelissaClouthier,
    emcs,
    futilityCloset,
    hardCorpsWife,
    libertyPundits,
    linuxResources,
    mindyMackenzie,
    myPrayerJournal,
    nsx,
    olivet,
    photographyByMichelle,
    prayerTracker,
    riehlWorldNews,
    tcms,
    techBlog,
    theSharkTank,
    vpr
  ]
}
