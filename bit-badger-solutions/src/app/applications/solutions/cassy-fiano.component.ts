import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-cassy-fiano',
  templateUrl: './cassy-fiano.component.html'
})
export class CassyFianoComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
