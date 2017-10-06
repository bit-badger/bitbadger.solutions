<template lang="pug">
article.content.auto
  page-title(title='Not Found (404)')
  h1 Not Found (404)
  p.
    Looks like you've stumbled into the part of this site where we have no content to give you. Of course, you could
    have hit an actual link that we moved, but missed setting up redirection for it. If that is the case, one of the
    links below may be what you need.
  ul
    li: p.
      The #[strong Linux Software Repository] used to be at #[tt /linux/software], but can now be found at
      #[a(href='https://hosted.djs-consulting.com/software') https://hosted.djs-consulting.com/software]. This
      includes the OpenSUSE ISOs, SQLDeveloper .deb packages, and Xine RPMs.
    li: p.
      The #[strong My Linux Adventure] and #[strong DJS Consulting Tech Blog] blogs used to be at #[tt /linux/blog],
      but both have been combined into #[em The Bit Badger Blog], which can be found at
      #[a(href='https://blog.bitbadger.solutions') https://blog.bitbadger.solutions].
    li: p.
      #[strong Kathie York]'s portfolio, formerly at #[tt /hosted/kathieyork], is now at
      #[a(href='https://hosted.djs-consulting.com/kathieyork') https://hosted.djs-consulting.com/kathieyork].
    li: p.
      #[strong Daniel J. Summers]'s personal site, formerly at #[tt /personal] (and a really ancient copy at
      #[tt /old_personal]), is now at #[a(href='https://daniel.summershome.org') https://daniel.summershome.org].
    li: p.
      The #[strong Not So Extreme Makeover: Community Edition] archive site, previously at
      #[tt /archived/notsoextreme_org], can now be found at
      #[a(href='https://hosted.djs-consulting.com/archive/notsoextreme_org') https://hosted.djs-consulting.com/archive/notsoextreme_org].
</template>

<script>
export default {
  name: 'four-oh-four'
}
</script>
