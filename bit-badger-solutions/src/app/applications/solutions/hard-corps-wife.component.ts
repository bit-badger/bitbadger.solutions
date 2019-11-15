import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-hard-corps-wife',
  templateUrl: './hard-corps-wife.component.html'
})
export class HardCorpsWifeComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
