<template lang="pug">
article.content.auto
  page-title(title='Information Publicizing Solutions')
  h1 Information Publicizing and Blogging
  p.
    In the early days of the World Wide Web, it was known as the "information superhighway." From its inception, the
    web's primary goal is information. The open nature of the Internet allows anyone, anywhere to say anything,
    provided they can connect a machine to the network. In fact, there are software products to handle everything
    except creating the content; all you have to bring is the ability to form a coherent thought, and type that
    thought into a box. #[a(href='https://wordpress.org' title='WordPress') WordPress] is one of the most popular
    #[abbr(title='Web Log') blog]ging platforms in use today; it allows authors to concentrate on the content of
    their websites, rather than forcing authors to turn into programmers.
  h2 Custom-Built Sites
  ul
    li: p.
      We developed and maintained the site for
      #[a(href='http://www.emeraldmountainchristianschool.org') Emerald Mountain Christian School]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'emerald-mountain-christian-school' } }" title='Emerald Mountain Christian School | Bit Badger Solutions') about])]
      for 9 years, where they had information about the type of curriculum they teach, the school's 40+-year history, a
      calendar of events, and how to get more information.
    li: p.
      We built and maintained the site for #[a(href='http://www.summershome.org') Photography by Michelle]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'photography-by-michelle' } }" title='Photography by Michelle | Bit Badger Solutions') about])],
      which had information, prices, and samples of the photographer's work, as well as the ability for customers to
      view proofs and make photo selections online.
    li: p.
      The sites for #[a(href='https://bayvista.org' title='Bay Vista Baptist Church') Bay Vista Baptist Church]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'bay-vista' } }" title='Bay Vista Baptist Church | Bit Badger Solutions') about])]
      and
      #[a(href='https://olivetbaptist.org' title='Olivet Baptist Church') Olivet Baptist Church]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'olivet-vista' } }" title='Olivet Baptist Church | Bit Badger Solutions') about])]
      utilize a "static site generator," where the entire site is generated from source files, then served. It requires
      no back-end database, which means that the server can send them as fast as its clients can take them. These two
      sites even have a generated podcast feed! Adding content to these types of sites requires a bit more technical
      knowledge beyond "typing text in a box," but it is a great way to build ultra-fast, scalable web sites.
    li: p.
      This site is a single-page application (SPA) utilizing the #[a(href='https://vuejs.org') Vue.js] JavaScript
      framework. The application pages are generated based on an internal data set, and the other pages are simple text
      components. Its bundling means that the initial page is small, and after the initial load, it runs entirely in
      the browser or on a phone or tablet. Sites that reference external data sets would still need to access the
      Internet to retrieve data, but this is much more efficient than having to download the entire page every single
      click. (It's even #[a(href='https://github.com/danieljsummers/djs-consulting.com') open source] if you want to
      see how we did it.)
  h2 WordPress Design, Customization, and Support
  ul
    li: p.
      We helped
      #[router-link(:to="{ name: 'Application', params: { app: 'cassy-fiano' } }" title='Cassy Fiano | Bit Badger Solutions') Cassy Fiano]
      and #[a(href='http://melissablogs.com' title='Dr. Melissa Clouthier | Information Pollination') Dr.Melissa Clouthier]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'dr-melissa-clouthier' } }" title='Dr. Melissa Clouthier | Bit Badger Solutions') about])]
      both move their blogs from Blogspot to their own domains.
    li: p.
      We migrated
      #[router-link(:to="{ name: 'Application', params: { app: 'liberty-pundits' } }" title='Liberty Pundits') Liberty Pundits]
      from a custom blog platform to WordPress, and set up and maintained their server, which routinely cleared 100,000
      hits per day in its prime.
    li: p.
      For #[a(href='https://www.futilitycloset.com' title='Futility Closet') Futility Closet]
      #[small (#[router-link(:to="{ name: 'Application', params: { app: 'futility-closet' } }" title='Futility Closet | Bit Badger Solutions') about])],
      we moved their site from a shared hosting platform to its own #[abbr(title='Virtual Private Server') VPS], to
      enable it to handle its ever-increasing traffic.
    li: p.
      #[router-link(:to="{ name: 'Application', params: { app: 'tcms' } }" title='TCMS | Bit Badger Solutions') TCMS]
      and
      #[router-link(:to="{ name: 'Application', params: { app: 'nsx' } }" title='NSXapp | Bit Badger Solutions') NSXapp]
      both used WordPress as their front end, which also provided a public web presence that the customers could update
      themselves.
  p.
    On #[em: a(href='https://blog.bitbadger.solutions' title='The Bit Badger Blog') The Bit Badger Blog] you can browse
    the
    #[a(href='https://blog.bitbadger.solutions/category/wordpress' title='WordPress | The Bit Badger Blog') WordPress]
    category for information on plug-ins, and we have supported theme customizations for nearly all of the WordPress
    sites linked on the sidebar/footer of the home page.
  p
    br
    router-link(to='/' title='Home') &laquo; Home
</template>

<script>
export default {
  name: 'information-publicizing'
}
</script>
