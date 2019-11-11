import { Component, OnInit, Input } from '@angular/core'

import { App } from '../application.types'

@Component({
  selector: 'app-application-image',
  templateUrl: './application-image.component.html',
  styleUrls: ['./application-image.component.sass']
})
export class ApplicationImageComponent implements OnInit {

  @Input() app: App

  constructor() { }

  ngOnInit() {
  }

  /** The link to the screenshot image */
  get imageLink () {
    return `/assets/screenshots/${this.app.id}.png`
  }

  /** The alt text for the screenshot image */
  get imageAlt () {
    return `Screen shot for ${this.app.name}`
  }

}
