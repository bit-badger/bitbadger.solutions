import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-olivet-baptist',
  templateUrl: './olivet-baptist.component.html'
})
export class OlivetBaptistComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
