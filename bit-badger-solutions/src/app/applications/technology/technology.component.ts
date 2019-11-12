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
    GitHub: 'https://github.com/',
    Hexo: 'https://hexo.io/',
    Hugo: 'https://gohugo.io/',
    Jekyll: 'https://jekyllrb.com/',
    MySQL: 'https://www.mysql.com/',
    myWebLog: 'https://github.com/bit-badger/myWebLog',
    Orchard: 'https://orchardproject.net/',
    PHP: 'https://www.php.net/',
    PostgreSQL: 'https://www.postgresql.org/',
    'Rackspace Cloud': 'https://www.rackspace.com/cloud',
    RethinkDB: 'https://rethinkdb.com/',
    'SQL Server': 'https://www.microsoft.com/en-us/sql-server/',
    WordPress: 'https://wordpress.org'
  }

  constructor() { }

  ngOnInit() { }

  /** Whether there is a link for a given product */
  hasLink(product: string) {
    return this.techLinks[product] !== undefined
  }

}
