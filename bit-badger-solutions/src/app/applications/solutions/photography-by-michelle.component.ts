import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-photography-by-michelle',
  templateUrl: './photography-by-michelle.component.html'
})
export class PhotographyByMichelleComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
