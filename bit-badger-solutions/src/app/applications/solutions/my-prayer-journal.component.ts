import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-my-prayer-journal',
  templateUrl: './my-prayer-journal.component.html'
})
export class MyPrayerJournalComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
