import { Component, OnInit, Input } from '@angular/core'

import { App } from '../application.types'

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.sass']
})
export class ApplicationHeaderComponent implements OnInit {

  @Input() app: App

  constructor() { }

  ngOnInit() { }

  /** Whether to link to the app's URL */
  get linkToApp () {
    return this.app.isActive || this.app.linkInactive
  }

  /** Whether to link to an archive URL */
  get linkToArchive () {
    return !this.app.isActive && !this.app.linkInactive && (this.app.archiveUrl > '')
  }
  
}
