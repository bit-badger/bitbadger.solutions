<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="/static/djs-consulting.png" alt="DJS Consulting" title="DJS Consulting" />
      </router-link>
      <img src="/static/slogan.png" alt="Your Web Design, Hosting, and Application Solution Source"
       title="Your web design, hosting, and application solution source!" />
      <span>&nbsp;</span>
    </header>
    <div id="content">
      <router-view></router-view>
    </div>
    <footer>
      <span>A <strong><a href="/">DJS Consulting</a></strong> original design</span>
      <span style="flex-grow:3;">&nbsp;</span>
      <span>Secured by <strong><a href="//letsencrypt.org">Let's Encrypt</a></strong></span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Play:400,700|Source+Sans+Pro:400,400i,700');
body {
	margin: 0px;
	font-family: "Source Sans Pro", "Segoe UI", Ubuntu, Tahoma, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
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
h1, h2, h3, footer {
	font-family: "Play", "Segoe UI", Ubuntu, "DejaVu Sans", "Liberation Sans", Arial, sans-serif;
}
h1 {
  text-align: center;
  margin: 21px 0;
  font-size: 24pt;
}
h2 {
  margin: 19px 0;
  width: 80%;
  border-bottom: solid 2px navy;
}
p {
    margin: 16px 0;
}
#content {
  margin: 0 15px;
  font-size: 1.05em;
}
.hdr {
	font-size: 14pt;
	font-weight: bold;
}
.valid_img {
	width: 88px;
	height: 31px;
	border: 0;
	vertical-align: middle;
}
header {
	display: flex;
  flex-direction: row;
  justify-content: space-between;
	height: 70px;
	border-bottom:solid 2px #3A1D00;
	background: #FFE88E;
}
header a:hover {
	border-bottom:none;
}
.content-item {
	padding-left: 5px;
	padding-right: 5px;
	font-size: 12pt;
}
article.page .metadata {
    display: none;
}
.strike {
  text-decoration: line-through;
}
footer {
	border-top: solid 5px #3A1D00;
	border-bottom: solid 1px #3A1D00;
	padding: 1px 15px 3px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
	/*text-align: right; */
	font-size: 1em;
	background-color: #FFE88E;
	color: black;
	clear: both;
}
footer a:link, footer a:visited {
	color: black;
}
footer a:hover {
	border-bottom: none;
	color: maroon;
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
</style>
