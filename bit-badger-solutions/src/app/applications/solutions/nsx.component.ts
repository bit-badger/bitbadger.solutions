import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-nsx',
  templateUrl: './nsx.component.html'
})
export class NsxComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
