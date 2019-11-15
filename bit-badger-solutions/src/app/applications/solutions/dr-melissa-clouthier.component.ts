import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-dr-melissa-clouthier',
  templateUrl: './dr-melissa-clouthier.component.html'
})
export class DrMelissaClouthierComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
