import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-futility-closet',
  templateUrl: './futility-closet.component.html'
})
export class FutilityClosetComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
