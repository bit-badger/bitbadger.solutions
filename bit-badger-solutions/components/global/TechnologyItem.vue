<template>
  <li>
    <a v-if="hasLink(tech[0])" :href="techLinks[tech[0]]" target="_blank">{{ tech[0] }}</a>
    <template v-else>{{ tech[0] }}</template>
    for {{ tech[1] }}
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

/** Links to various technologies */
const techLinks: any = {
  'ASP.NET MVC': 'https://dotnet.microsoft.com/apps/aspnet/mvc',
  Azure: 'https://azure.microsoft.com/',
  'BlogEngine.NET': 'http://www.dotnetblogengine.net/',
  'Database Abstraction': 'https://github.com/danieljsummers/DatabaseAbstraction',
  'Digital Ocean': 'https://www.digitalocean.com/',
  Giraffe: 'https://github.com/giraffe-fsharp/Giraffe',
  GitHub: 'https://github.com/',
  'GitHub Pages': 'https://pages.github.com/',
  Hexo: 'https://hexo.io/',
  Hugo: 'https://gohugo.io/',
  Jekyll: 'https://jekyllrb.com/',
  MongoDB: 'https://www.mongodb.com/',
  MySQL: 'https://www.mysql.com/',
  myWebLog: 'https://github.com/bit-badger/myWebLog',
  nginx: 'http://nginx.org/',
  Orchard: 'https://orchardproject.net/',
  PHP: 'https://www.php.net/',
  PostgreSQL: 'https://www.postgresql.org/',
  'Rackspace Cloud': 'https://www.rackspace.com/cloud',
  RavenDB: 'https://ravendb.net/',
  RethinkDB: 'https://rethinkdb.com/',
  'SQL Server': 'https://www.microsoft.com/en-us/sql-server/',
  'Vue.js': 'https://vuejs.org/',
  WordPress: 'https://wordpress.org'
}

export default Vue.extend({
  name: 'technology-item',
  props: [ 'tech' ],
  data () {
    return { techLinks }
  },
  methods: {
    /**
     * Does the given technology have a known link?
     * 
     * @param tech The technology to be checked
     * @returns True if there is a link, false if not
     */
    hasLink (tech: string): boolean {
      return techLinks[tech] !== undefined
    }
  }
})
</script>