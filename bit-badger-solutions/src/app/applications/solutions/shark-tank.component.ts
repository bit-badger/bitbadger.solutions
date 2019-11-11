import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-shark-tank',
  templateUrl: './shark-tank.component.html'
})
export class SharkTankComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
