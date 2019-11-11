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
    'Azure': 'https://azure.microsoft.com/',
    'Hexo': 'https://hexo.io/',
    'Hugo': 'https://gohugo.io/',
    'Jekyll': 'https://jekyllrb.com/',
    'WordPress': 'https://wordpress.org'
  }

  constructor() { }

  ngOnInit() { }

  /** Whether there is a link for a given product */
  hasLink(product: string) {
    return this.techLinks[product] !== undefined
  }

}
