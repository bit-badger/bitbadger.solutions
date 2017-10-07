<template lang="pug">
div.home
  article.content.auto
    page-title(title='Welcome!')
    p.home-lead Bit Badger Solutions develops the site you need to enable your success!
    p These solutions can take several different forms.
    h2 Process Automation and User Engagement
    p.
      Do you have a process that requires recording the same thing multiple times? Do you have information in different
      places, but you need it all together? This solution is for you.
      #[router-link(to='/about/process-automation-solutions' title='Process Automation Solutions') Learn more about how our solutions automate processes and engage users].
    h2 Information Publicizing and Blogging
    p.
      From its inception, the Web has been about information. Do you need to get information out about an upcoming
      event? Are you wanting to start blogging, or breathe some fresh life into an existing blog? Those are but a few
      of the problems that this solution solves.
      #[router-link(to='/about/information-publicizing-solutions' title='Information Publicizing Solutions') Find out more about our information publicizing and blogging solutions]
      (including WordPress and statically-generated sites).
    h2 Web Services and APIs
    p.
      Do you have a need for multiple computers to talk to each other? Do you have an interesting data set that you want
      to make available to the public? A web service or API may be just the solution for you.
      #[router-link(to='/about/web-services-solutions' title='Web Services and API Solutions') Learn about web services, along with examples of current solutions].
    h2 Legacy Data Sharing
    p.
      Do you have data that's old &mdash; and by &ldquo;old,&rdquo; we aren&rsquo;t talking &ldquo;iPhone 6&rdquo; old,
      we&rsquo;re talking &ldquo;this data
      #[a(href='https://en.wikipedia.org/wiki/Age_of_candidacy#United_States' title='Age of Candidacy (United States) | Wikipedia') could run for President]&rdquo;
      old? Just because the information is in an older &ldquo;legacy&rdquo; system doesn&rsquo;t mean it has to stay
      there.
      #[router-link(to='/about/legacy-data' title='Legacy Data Sharing Solutions') Learn how our solutions can help get this data where you and your customers can access it more easily].
    h2 Why Web-Based?
    p.
      Web-based solutions have many advantages:
    ul
      li: p.
        They can be used just on a local, private network (an intranet) or on the public Internet.
      li: p.
        They are available to any device connected to the network.
      li: p.
        They require no special software; every device has a browser - which you're using to read this!)
      li: p.
        They can get your most critical needs met first, then evolved and improved over time.
    h2 What Is a &ldquo;Bit Badger&rdquo;?
    p.
      #[router-link(to='/about/why-bit-badger' title='Why Bit Badger?') Read the Bit Badger&rsquo;s origin story].
    h2 Solutions to Your Problems
    p.
      We&rsquo;d be happy to discuss your information technology needs, and which of our solutions are right for you.
      Just #[a(href='mailto:daniel@djs-consulting.com') e-mail us] and let us know what we can do for you! You can also
      #[router-link(to='/solutions' title='All Solutions') browse a complete list of our current and previous solutions].
  app-sidebar
</template>

<script>
import AppSidebar from './sidebar/AppSidebar.vue'
import PageTitle from './PageTitle.vue'

export default {
  name: 'home',
  components: {
    AppSidebar,
    PageTitle
  }
}
</script>

<style>
@media all and (min-width: 80rem) {
  .home {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-around;
  }
}
.home-lead {
  font-size: 1.3rem;
  text-align: center;
}
</style>
