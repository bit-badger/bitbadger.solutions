<template lang="pug">
  #app
    header
      .header-logo
        router-link(to='/')
          img(src='/static/bitbadger.png'
              alt='A cartoon badger looking at a computer screen, with his paw on a mouse'
              title='Bit Badger Solutions')
      .header-title: router-link(to='/') Bit Badger Solutions
      .header-spacer &nbsp;
      .header-social
        a(href='https://twitter.com/DJS_Consulting' title='DJS_Consulting on Twitter')
          img(src='/static/twitter.png' alt='Twitter' )
        | &nbsp; &nbsp;
        a(href='https://www.facebook.com/pages/DJS-Consulting/262368048575' title='DJS Consulting on Facebook')
          img(src='/static/facebook.png' alt='Facebook')
    #content
      router-view
    footer
      span.
        A #[strong: router-link(to='/') Bit Badger Solutions] original design
      span(style='flex-grow:3;') &nbsp;
      span.
        Secured by #[strong: a(href='//letsencrypt.org') Let's Encrypt]
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|Raleway');
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
	border:0;
}
acronym {
	border-bottom:dotted 1px black;
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
  width: 80%;
  border-bottom: solid 2px navy;
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
header {
	height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: -webkit-gradient(linear, left top, left bottom, from(lightgray), to(#FFFAFA));
  background-image: -webkit-linear-gradient(top, lightgray, #FFFAFA);
  background-image: -moz-linear-gradient(top, lightgray, #FFFAFA);
  background-image: linear-gradient(to bottom, lightgray, #FFFAFA);
}
header a:link, header a:visited {
  color: black;
}
header a:hover {
	border-bottom:none;
}
.content-item {
	padding-left: 5px;
	padding-right: 5px;
	font-size: 1rem;
}
article.page .metadata {
    display: none;
}
.strike {
  text-decoration: line-through;
}
footer {
	padding: 20px 15px 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
	font-size: 1rem;
	color: black;
	clear: both;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFAFA), to(lightgray));
  background-image: -webkit-linear-gradient(top, #FFFAFA, lightgray);
  background-image: -moz-linear-gradient(top, #FFFAFA, lightgray);
  background-image: linear-gradient(to bottom, #FFFAFA, lightgray);
}
footer a:link, footer a:visited {
	color: black;
}
.alignleft {
	float:left;
	padding-right: 5px;
}
ul {
	padding-left: 40px;
}
li {
	list-style-type: disc;
}
.header-title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 100px;
}
.header-spacer {
  flex-grow: 3;
}
.header-social {
  padding: 25px .8rem 0 0;
}
.header-social img {
  width: 50px;
  height: 50px;
}
</style>
