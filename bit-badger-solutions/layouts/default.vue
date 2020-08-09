<template>
  <div>
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head () {
    return {
      link: [
        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Oswald|Raleway'
        }
      ]
    }
  }
})
</script>

<style>
html {
  background-color: lightgray;
}
body {
  margin: 0px;
  font-family: "Raleway", "Segoe UI", Ubuntu, Tahoma, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
  background-color: #FFFAFA;
}
a {
  color: navy;
  text-decoration: none;
}
a:hover {
  border-bottom: dotted 1px navy;
}
a img {
  border: 0;
}
acronym {
  border-bottom: dotted 1px black;
}
header, h1, h2, h3, footer a {
  font-family: "Oswald", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
}
h1 {
  text-align: center;
  margin: 1.4rem 0;
  font-size: 2rem;
}
h2 {
  margin: 1.2rem 0;
}
h3 {
  margin: 1rem 0;
}
h2, h3 {
  border-bottom: solid 2px navy;
}
@media all and (min-width:40rem) {
  h2, h3 {
    width: 80%;
  }
}
p {
  margin: 1rem 0;
}
#content {
  margin: 0 1rem;
}
.content {
  font-size: 1.1rem;
}
.auto {
  margin: 0 auto;
}
@media all and (min-width: 68rem) {
  .content {
    width: 66rem;
  }
}
.hdr {
  font-size: 14pt;
  font-weight: bold;
}
.strike {
  text-decoration: line-through;
}
.alignleft {
  float: left;
  padding-right: 5px;
}
ul {
  padding-left: 40px;
}
li {
  list-style-type: disc;
}
.app-info {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
}
abbr[title] {
  text-decoration: none;
  border-bottom: dotted 1px rgba(0, 0, 0, .5)
}
</style>
