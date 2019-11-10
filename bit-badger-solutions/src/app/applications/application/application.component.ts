import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ApplicationService } from '../application.service'
import { App } from '../application.types'

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})
export class ApplicationComponent implements OnInit {

  /** The app we're displaying */
  application: App

  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const appId = this.route.snapshot.paramMap.get('appId')
    this.appService.getApp(appId)
      .subscribe(app => this.application = app)
  }
  
  /** The page title based on this app */
  get pageTitle () {
     return `${this.application.name} « Solutions`
  }

  /** Whether to link to the app's URL */
  get linkToApp () {
    return this.application.isActive || this.application.linkInactive
  }

  /** Whether to link to an archive URL */
  get linkToArchive () {
    return !this.application.isActive && !this.application.linkInactive && (this.application.archiveUrl > '')
  }

  /** The link to the screenshot image */
  get imageLink () {
    return `/assets/screenshots/${this.application.id}.png`
  }

  /** The alt text for the screenshot image */
  get imageAlt () {
    return `Screen shot for ${this.application.name}`
  }

}
