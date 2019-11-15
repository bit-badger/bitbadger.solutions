import { App, Category, Quote, Technology } from './application.types'

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
  new Technology('Hugo', 'static site generation', true),
  new Technology('Azure', 'podcast file storage, automated builds, and static site hosting', true),
  new Technology('GitHub', 'source code control', true),
  new Technology('Hexo', 'static site generation'),
  new Technology('Jekyll', 'static site generation'),
  new Technology('WordPress', 'content management'),
  new Technology('MySQL', 'data storage')
]

/** The Bit Badger Blog */
const techBlog = new App('tech-blog', 'The Bit Badger Blog', 'https://blog.bitbadger.solutions')
techBlog.categoryId = Category.STATIC
techBlog.frontPageText = 'Technical information (&ldquo;geek stuff&rdquo;) from Bit Badger Solutions'
techBlog.frontPageOrder = 3
techBlog.indexText = 'Geek stuff from Bit Badger Solutions'
techBlog.techStack = [
  new Technology('Hexo', 'static site generation', true),
  new Technology('Azure', 'static site hosting', true),
  new Technology('GitHub', 'source code control', true),
  new Technology('Custom software', 'content management'),
  new Technology('WordPress', 'content management'),
  new Technology('BlogEngine.NET', 'content management'),
  new Technology('Orchard', 'content management'),
  new Technology('myWebLog', 'content management'),
  new Technology('Jekyll', 'static site generation'),
  new Technology('MySQL', 'data storage'),
  new Technology('SQL Server', 'data storage'),
  new Technology('RethinkDB', 'data storage')
]

/** Cassy Fiano */
const cassyFiano = new App('cassy-fiano', 'Cassy Fiano', 'http://www.cassyfiano.com')
cassyFiano.isActive = false
cassyFiano.categoryId = Category.WORDPRESS
cassyFiano.indexText = 'A &ldquo;rising star&rdquo; conservative blogger'
cassyFiano.techStack = [
  new Technology('WordPress', 'blogging (with a custom theme)'),
  new Technology('MySQL', 'data storage'),
  new Technology('Rackspace Cloud', 'backup and recovery'),
  new Technology('Azure', 'backup and recovery')
]

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
drMelissaClouthier.techStack = [
  new Technology('WordPress', 'blogging (with a custom theme)'),
  new Technology('MySQL', 'data storage'),
  new Technology('Rackspace Cloud', 'backup and recovery'),
  new Technology('Azure', 'backup and recovery')
]

/** Emerald Mountain Christian School */
const emcs = new App('emerald-mountain-christian-school', 'Emerald Mountain Christian School',
  'http://www.emeraldmountainchristianschool.org')
emcs.isActive = false
emcs.linkInactive = true
emcs.indexText = 'Classical, Christ-centered education near Wetumpka, Alabama'
emcs.techStack = [
  new Technology('PHP', 'page generation and interactivity'),
  new Technology('ASP.NET MVC', 'page generation and interactivity'),
  new Technology('PostgreSQL', 'data storage'),
  new Technology('Rackspace Cloud', 'hosting'),
  new Technology('Azure', 'hosting')
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
  new Technology('WordPress', 'blogging', true),
  new Technology('nginx', 'the web server', true),
  new Technology('MySQL', 'data storage', true),
  new Technology('Digital Ocean', 'web site hosting', true),
  new Technology('Azure', 'backup and recovery', true),
  new Technology('Rackspace Cloud', 'web site hosting')
]

/** Hard Corps Wife */
const hardCorpsWife = new App('hard-corps-wife', 'Hard Corps Wife', 'http://www.hardcorpswife.com')
hardCorpsWife.isActive = false
hardCorpsWife.categoryId = Category.WORDPRESS
hardCorpsWife.indexText = 'Cassy&rsquo;s life as a Marine wife'
hardCorpsWife.techStack = [
  new Technology('WordPress', 'blogging'),
  new Technology('MySQL', 'data storage'),
  new Technology('Rackspace Cloud', 'web site hosting')
]

/** Liberty Pundits */
const libertyPundits = new App('liberty-pundits', 'Liberty Pundits', 'http://libertypundits.net')
libertyPundits.isActive = false
libertyPundits.categoryId = Category.WORDPRESS
libertyPundits.indexText = 'The home for conservatives'
libertyPundits.techStack = [
  new Technology('WordPress', 'blogging'),
  new Technology('PHP', 'custom data migration software'),
  new Technology('MySQL', 'data storage')
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
  new Technology('WordPress', 'blogging', true),
  new Technology('nginx', 'the web server', true),
  new Technology('MySQL', 'data storage', true),
  new Technology('Digital Ocean', 'web site hosting', true),
  new Technology('Azure', 'backup and recovery', true),
]

/** myPrayerJournal */
const myPrayerJournal = new App('my-prayer-journal', 'myPrayerJournal', 'https://prayerjournal.me')
myPrayerJournal.frontPageText = 'Minimalist personal prayer journal'
myPrayerJournal.frontPageOrder = 2
myPrayerJournal.indexText = 'Minimalist personal prayer journal'
myPrayerJournal.techStack = [
  new Technology('Vue.js', 'the front-end', true),
  new Technology('Giraffe', 'the back-end data API', true),
  new Technology('RavenDB', 'data storage', true),
  new Technology('GitHub', 'source code control', true),
  new Technology('GitHub Pages', 'documentation', true),
  new Technology('PostgreSQL', 'data storage')
]

/** Not So Extreme Makeover: Community Edition */
const nsx = new App('nsx', 'Not So Extreme Makeover: Community Edition', 'http://notsoextreme.org')
nsx.isActive = false
nsx.archiveUrl = 'https://nsx.archive.bitbadger.solutions'
nsx.indexText =
  'Public site for the makeover; provides event-driven management of volunteers, donations, and families needing help'
nsx.techStack = [
  new Technology('WordPress', 'content management'),
  new Technology('PHP', 'NSXapp'),
  new Technology('MySQL', 'WordPress data storage'),
  new Technology('PostgreSQL', 'NSXapp data storage')
]

/** Olivet Baptist Church */
const olivet = new App('olivet-baptist', 'Olivet Baptist Church', 'https://olivet-baptist.org')
olivet.isActive = false
olivet.archiveUrl = 'https://olivet.archive.bitbadger.solutions'
olivet.categoryId = Category.STATIC
olivet.indexText = 'Southern Baptist church in Gulfport, Mississippi'
olivet.techStack = [
  new Technology('Vue.js', 'the user interface for the PWA'),
  new Technology('Hexo', `generating the site's pages`),
  new Technology('Azure', 'podcast file storage and archive site hosting'),
  new Technology('WordPress', 'content management'),
  new Technology('MySQL', 'data storage')
]

/** Photography by Michelle */
const photographyByMichelle = new App('photography-by-michelle', 'Photography by Michelle',
  'https://www.summershome.org')
photographyByMichelle.isActive = false
photographyByMichelle.linkInactive = true
photographyByMichelle.indexText = 'Photography services in Albuquerque, New Mexico'
photographyByMichelle.techStack = [
  new Technology('ASP.NET MVC', 'content management / gallery creation API'),
  new Technology('PostgreSQL', 'data storage'),
  new Technology('C# / Windows Forms', 'desktop gallery application'),
  new Technology('WordPress', 'content management'),
  new Technology('MySQL', 'data storage')
]

/** PrayerTracker */
const prayerTracker = new App('prayer-tracker', 'PrayerTracker', 'https://prayer.bitbadger.solutions')
prayerTracker.frontPageText = 'A prayer request tracking website (Free for any church or Sunday School class!)'
prayerTracker.frontPageOrder = 1
prayerTracker.indexText = 'Provides an ongoing, centralized prayer list for Sunday School classes and other groups'
prayerTracker.techStack = [
  new Technology('Giraffe', 'server-side logic and dynamic page generation', true),
  new Technology('PostgreSQL', 'data storage', true),
  new Technology('GitHub', 'source code control', true),
  new Technology('GitHub Pages', 'documentation hosting', true),
  new Technology('MongoDB', 'data storage'),
  new Technology('ASP.NET MVC', 'dynamic content generation'),
  new Technology('Database Abstraction', 'data access'),
  new Technology('MySQL', 'data storage'),
  new Technology('PHP', 'dynamic content generation')
]

/** Riehl World News */
const riehlWorldNews = new App('riehl-world-news', 'Riehl World News', 'http://riehlworldview.com')
riehlWorldNews.categoryId = Category.WORDPRESS
riehlWorldNews.frontPageText = 'Riehl news for real people'
riehlWorldNews.frontPageOrder = 4
riehlWorldNews.indexText = 'Riehl news for real people'
riehlWorldNews.techStack = [
  new Technology('WordPress', 'blogging', true),
  new Technology('MySQL', 'data storage', true),
  new Technology('F#', 'custom archive static page generation')
]

/** The Shark Tank */
const theSharkTank = new App('the-shark-tank', 'The Shark Tank', 'http://shark-tank.net')
theSharkTank.isActive = false
theSharkTank.categoryId = Category.WORDPRESS
theSharkTank.indexText = 'Florida’s political feeding frenzy'
theSharkTank.techStack = [ new Technology('WordPress', 'blogging') ]

/** The Clearinghouse Management System */
var tcms = new App('tcms', 'The Clearinghouse Management System', 'http://tcms.us')
tcms.isActive = false
tcms.indexText =
  'Assists a needs clearinghouse in connecting people with needs to people that can help meet those needs'
tcms.techStack = [
  new Technology('PHP', 'the TCMS application logic'),
  new Technology('WordPress', 'publicly-facing pages and authentication'),
  new Technology('PostgreSQL', 'application data storage'),
  new Technology('MySQL', 'WordPress data storage')
]

/** Virtual Prayer Room */
const vpr = new App('virtual-prayer-room', 'Virtual Prayer Room', 'https://virtualprayerroom.us')
vpr.isActive = false
vpr.indexText = 'Gives prayer warriors access to requests from wherever they may be, and sends them daily updates'
vpr.techStack = [
  new Technology('PHP', 'the application logic'),
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
