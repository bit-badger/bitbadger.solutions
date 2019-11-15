import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-emerald-mountain-christian-school',
  templateUrl: './emerald-mountain-christian-school.component.html'
})
export class EmeraldMountainChristianSchoolComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
