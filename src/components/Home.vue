<template>
  <article>
    <page-title title="Welcome!" />
    <h1>Welcome to DJS Consulting!</h1>
    <app-sidebar />
    <p>
      DJS Consulting can develop an interactive web application to fit almost any need.
      <router-link to="/applications" title="Web Sites and Applications">View the complete list of our current web
      sites and applications!</router-link>
    </p>
    <h2>Process Automation and User Engagement</h2>
    <p>
      Computers can be used to augment or automate nearly any process; could you think of generating bank statements,
      processing mailing lists, or tracking orders without some form of automation? We develop web-based solutions to
      automate <em>your</em> processes, ensuring that your business constraints are satisfied; these systems can run on
      the Internet or your private network. For Internet-facing solutions, we engineer solutions that allow them to
      interact with you securely, presented in an engaging manner. And, by "engagement," we are not describing intrusive
      page pop-ups and other <span class="strike">marketing gimmicks</span> web annoyances; we determine an optimal user
      experience for <em>your</em> customers, and tailor the solution to work for both of you.
    </p>
    <p>Several of our projects fit this description.</p>
    <ul>
      <li>
        <router-link to="/applications/virtual-prayer-room" title="Virtual Prayer Room">Virtual Prayer
        Room</router-link> helped the prayer ministry of
        <a href="http://www.hoffmantown.org" title="Hoffmantown Church in Albuquerque, NM">Hoffmantown Church</a>
        enable their prayer warriors to have access to requests wherever they are, even in their inbox once a day!
      </li>
      <li>
        <router-link to="/applications/tcms" title="TCMS">TCMS</router-link> was an application that helped
        organizations such as <a href="http://www.loveincabq.org">Love INC of South Albuquerque</a> connect people with
        needs to people who can help fulfill those needs. TCMS sprung from the
        <a href="http://hosted.djs-consulting.com/archive/notsoextreme_org" title="Not So Extreme Makeover: Community Edition (Archive)">Not
        So Extreme Makeover: Community Edition</a> in Albuquerque, New Mexico during spring break 2008; we not only
        developed the public presence, but a private system called
        <router-link to="/applications/nsx/" title="NSX &bull; DJS Consulting">NSXapp</router-link> that enabled the
        management of the volunteers, families, and things for this massive effort.
      </li>
      <li>
        We continue to offer
        <router-link to="/applications/prayertracker" title="PrayerTracker &bull; DJS Consulting">PrayerTracker</router-link>,
        a free-to-use web application that helps Sunday School classes (or other small groups) generate a prayer request
        list; it provides a central place for list management and continuity.
      </li>
    </ul>
    <h2>Information Publicizing <small><em>(including WordPress)</em></small></h2>
    <p>
      In the early days of the World Wide Web, it was known as the "information superhighway." From its inception, the
      web's primary goal is information. The open nature of the Internet allows anyone, anywhere to say anything,
      provided they can connect a machine to the network. In fact, there are software products to handle everything
      except creating the content; all you have to bring is the ability to form a coherent thought, and type that
      thought into a box. <a href="https://wordpress.org" title="WordPress">WordPress</a> is one of the most popular
      <abbr title="Web Log">blog</abbr>ging platforms in use today; it allows authors to concentrate on the content of
      their websites, rather than forcing authors to turn into programmers.
    </p>
    <h3>Custom-Built Sites</h3>
    <ul>
      <li>
        We developed and maintained the site for <a href="http://www.emeraldmountainchristianschool.org">Emerald
        Mountain Christian School</a> for 9 years, where they had information about the type of curriculum they teach,
        the school's 40+-year history, a calendar of events, and how to get more information.
      </li>
      <li>
        We built and maintained the site for <a href="http://www.summershome.org">Photography by Michelle</a>, which had
        information, prices, and samples of the photographer's work, as well as the ability for customers to view proofs
        and make photo selections online.
      </li>
      <li>
        The sites for <a href="//bayvista.org" title="Bay Vista Baptist Church">Bay Vista Baptist Church</a> and
        <a href="//olivetbaptist.org" title="Olivet Baptist Church">Olivet Baptist Church</a> utilize a "static site
        generator," where the entire site is generated from source files, then served. It requires no back-end database,
        which means that the server can send them as fast as its clients can take them. These two sites even have a
        generated podcast feed! Adding content to these types of sites requires a bit more technical knowledge beyond
        "typing text in a box," but it is a great way to build ultra-fast, scalable web sites.
      </li>
      <li>
        This site is a single-page application (SPA) utilizing the <a href="//vuejs.org">Vue.js</a> JavaScript
        framework. The application pages are generated based on an internal data set, and the other pages are simple
        text components. Its bundling means that the initial page is small, and after the initial load, it runs entirely
        in the browser or on a phone or tablet. Sites that reference external data sets would still need to access the
        Internet to retrieve data, but this is much more efficient than having to download the entire page every single
        click.
      </li>
    </ul>
    <h3>WordPress Design, Customization, and Support</h3>
    <ul>
      <li>
        We helped <router-link to="/applications/cassy-fiano" title="Cassy Fiano">Cassy Fiano</router-link> and
        <a href="http://melissablogs.com" title="Dr. Melissa Clouthier &bull; Information Pollination">Dr.Melissa
        Clouthier</a> both move their blogs from Blogspot to their own domains.
      </li>
      <li>
        We migrated <router-link to="/applications/liberty-pundits" title="Liberty Pundits">Liberty
        Pundits</router-link> from a custom blog platform to WordPress, and set up and maintained their server, which
        routinely cleared 100,000 hits per day in its prime.
      </li>
      <li>
        For <a href="//www.futilitycloset.com" title="Futility Closet">Futility Closet</a>, we moved their site from a
        shared hosting platform to its own <abbr title="Virtual Private Server">VPS</abbr>, to enable it to handle its
        ever-increasing traffic.
      </li>
      <li>
        TCMS and NSXapp both used WordPress as their front end, which also provided a public web presence that the
        customers could update themselves.
      </li>
    </ul>
    <p>
      On our <a href="//techblog.djs-consulting.com" title="DJS Consulting Tech Blog">tech blog</a> you can browse the
      <a href="//techblog.djs-consulting.com/category/wordpress" title="WordPress - DJS Consulting Tech Blog">WordPress</a>
      category for information on plug-ins, and you'll find that the themes on all of the WordPress blogs linked on the
      right have been customized.
    </p>
    <h2>Web Services</h2>
    <p>
      A web service is a way of using the Internet to provide or accept information that makes sense to computers; this
      allows other sites or applications to consume information from, or provide information to, your service. This
      enables communication between applications, without having to establish any communication channels other than the
      ones that web browsers already use. It isn't the best fit for every application, but when it is useful, it is
      <em>very</em> useful.
    </p>
    <p>
      Photography by Michelle has a web service that a desktop application utilizes to create the online proof sets
      right from the computer where the images reside. We also
      <a href="//techblog.djs-consulting.com/2010/4040-web-service.html" title="40/40 Web Service">wrote a service</a>
      for the 2010 <a href="http://erlc.com/4040/" title="40/40 Prayer Vigil - Ethics and Religious Liberty Commission of the Southern Baptist Convention">40/40
      Prayer Vigil</a>, which was utilized by several sites to display the current day's (or hour's) prayer focus, and
      <a href="//techblog.djs-consulting.com/2012/4040-web-service-for-2012.html" title="40/40 Web Service for 2012">wrote
      one for 2012</a> as well. <em>(As the ERLC does not host these any more, this service is no longer active.)</em>
    </p>
    <h2>Legacy Data Sharing</h2>
    <p>
      Our background in mainframe applications gives us a knowledgeable perspective on retrieving information from
      older, &ldquo;legacy&rdquo; systems. This data can be migrated to a more modern relational or document database,
      where a web application can retrieve the information; in some cases, the data can even be exposed as a web service
      in place. These types of systems are often a great way for companies to expose their data to their customers,
      without having to move their day-to-day system from its current environment. While we currently have no active
      projects along these lines, our developers have done them in the past for other organizations; sadly, none can be
      linked publicly.
    </p>
    <h2>Why Web-Based?</h2>
    <p>
      Developing a web-based solution has many advantages, whether that application can be used just on a local, private
      network (an intranet), or on the Internet.
    </p>
    <ul>
      <li>
        The application is available from any computer connected to the network &mdash; your home computer, your mobile
        phone or tablet, a shared comptuer in a library - wherever!
      </li>
      <li>
        There is no special software to install &mdash; every computer and mobile device has a web browser on it, and we
        ensure our solutions work on today's most popular web browsers, including Microsoft&reg; Edge, Mozilla Firefox,
        and Google Chrome.
      </li>
      <li>
        Web-based solutions are easy to implement in a step-by-step fashion, so your most critical needs can be
        addressed and deployed first. Enhancements are generally easy to do as well.
      </li>
    </ul>
    <p>
      We'd be happy to discuss your information technology needs, and how we may be able to help you. Just
      <a href="mailto:daniel@djs-consulting.com">e-mail us</a> and let us know what we can do for you!
    </p>
  </article>
</template>

<script>
import AppSidebar from './sidebar/AppSidebar.vue'
import PageTitle from './PageTitle.vue'

export default {
  name: 'home',
  data: function () {
    return {
      toggleExamples: function (e) {
        e.preventDefault()
        const el = document.getElementById('test')
        if (el.style.height === '0px') {
          el.style.height = 'auto'
          const hite = el.clientHeight
          console.log('height = ' + hite)
          el.style.height = '0'
          window.requestAnimationFrame(function () {
            el.style.overflow = 'visible'
            el.style.height = hite + 'px'
            setTimeout(function () { el.style.overflow = 'visible' }, 1000)
          })
        } else {
          el.style.height = '0'
          setTimeout(function () { el.style.overflow = 'hidden' }, 1000)
        }
      }
    }
  },
  components: {
    AppSidebar,
    PageTitle
  }
}
</script>

<style>
.examples {
  transition: all 1s ease;
}
</style>
