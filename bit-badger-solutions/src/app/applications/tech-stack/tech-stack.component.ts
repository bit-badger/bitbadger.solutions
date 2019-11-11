import { Component, OnInit, Input } from '@angular/core'

import { Technology } from '../application.types'

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.sass']
})
export class TechStackComponent implements OnInit {

  @Input() stack: Technology[]
  
  /** External links to technology products */
  private techLinks = {
    'WordPress': 'https://wordpress.org'
  }

  constructor() { }

  ngOnInit() { }

  /** Whether there is a link for a given product */
  hasLink(product: string) {
    return this.techLinks[product] !== undefined
  }

  /** The currently-used technologies */
  get currentStack() {
    return this.stack.filter(p => p.current)
  }

  /** The previously-used technologies */
  get priorStack() {
    return this.stack.filter(p => !p.current)
  }

}
