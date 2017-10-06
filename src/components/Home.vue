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
      Do you have data that's old &mdash; and by &ldquo;old,&rdquo; we aren&rsquo;t talking &ldquo;iPhone 6 old,&rdquo;
      we&rsquo;re talking &ldquo;this data
      #[a(href='https://en.wikipedia.org/wiki/Age_of_candidacy#United_States' title='Age of Candidacy (United States) | Wikipedia') could run for President]&rdquo;
      old? Just because the information is in an older &ldquo;legacy&rdquo; system doesn&rsquo;t mean it has to stay
      there.
      #[router-link(to='/about/legacy-data' title='Legacy Data Sharing Solutions') Learn how our solutions can help get this data where you and your customers can access it more easily].
    h2 Why Web-Based?
    p.
      Developing a web-based solution has many advantages, whether that application can be used just on a local, private
      network (an intranet), or on the Internet.
    ul
      li.
        The application is available from any computer connected to the network &mdash; your home computer, your mobile
        phone or tablet, a shared comptuer in a library - wherever!
      li.
        There is no special software to install &mdash; every computer and mobile device has a web browser on it, and we
        ensure our solutions work on today's most popular web browsers, including Microsoft&reg; Edge, Mozilla Firefox,
        and Google Chrome.
      li.
        Web-based solutions are easy to implement in a step-by-step fashion, so your most critical needs can be
        addressed and deployed first. Enhancements are generally easy to do as well.
    h2 What's With the Name &ldquo;Bit Badger&rdquo;?
    p.
      Link goes here
    h2 What Next
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
