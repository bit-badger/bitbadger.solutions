import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-mindy-mackenzie',
  templateUrl: './mindy-mackenzie.component.html'
})
export class MindyMackenzieComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
