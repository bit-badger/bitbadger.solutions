import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-tcms',
  templateUrl: './tcms.component.html'
})
export class TcmsComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
