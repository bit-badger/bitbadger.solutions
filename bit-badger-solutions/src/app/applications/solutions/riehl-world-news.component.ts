import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-riehl-world-news',
  templateUrl: './riehl-world-news.component.html'
})
export class RiehlWorldNewsComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
