import { Component, OnInit, Input } from '@angular/core'

import { Technology } from '../application.types'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.sass']
})
export class TechnologyComponent implements OnInit {

  @Input() tech: Technology

  /** External links to technology products */
  private techLinks = {
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

  constructor() { }

  ngOnInit() { }

  /** Whether there is a link for a given product */
  hasLink(product: string) {
    return this.techLinks[product] !== undefined
  }

}
