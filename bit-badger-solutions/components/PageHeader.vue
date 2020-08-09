<template>
  <header class="site-header">
    <div class="header-logo">
      <nuxt-link to="/">
        <img
             src="/bitbadger.png"
             alt="A cartoon badger looking at a computer screen, with his paw on a mouse"
             title="Bit Badger Solutions">
      </nuxt-link>
    </div>
    <div class="header-title">
      <nuxt-link to="/">Bit Badger Solutions</nuxt-link>
    </div>
    <div class="header-spacer">
      &nbsp;
    </div>
    <div class="header-social">
      <a href="https://twitter.com/Bit_Badger" title="Bit_Badger on Twitter" target="_blank">
        <img src="/twitter.png" alt="Twitter">
      </a>&nbsp; &nbsp;<a href="https://www.facebook.com/bitbadger.solutions" title="Bit Badger Solutions on Facebook" _target="_blank">
        <img src="/facebook.png" alt="Facebook">
      </a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, lightgray, #FFFAFA);
}
.site-header a, .site-header a:visited {
  color: black;
}
.site-header a:hover {
  border-bottom: none;
}
.header-title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 100px;
  text-align: center;
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
@media all and (max-width:40rem) {
  .site-header {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  .header-title {
    line-height: 3rem;
  }
  .header-spacer {
    display: none;
  }
}
</style>
