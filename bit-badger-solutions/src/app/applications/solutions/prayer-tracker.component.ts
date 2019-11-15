import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-prayer-tracker',
  templateUrl: './prayer-tracker.component.html'
})
export class PrayerTrackerComponent extends AppDetailComponent {

  @Input() app: App
  
  constructor() {
    super()
  }

}
