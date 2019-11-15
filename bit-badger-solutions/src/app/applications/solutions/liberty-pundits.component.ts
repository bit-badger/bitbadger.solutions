import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-liberty-pundits',
  templateUrl: './liberty-pundits.component.html'
})
export class LibertyPunditsComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
