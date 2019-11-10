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

  /** The page title based on this app */
  pageTitle: string

  /** Whether to link to the app's URL */
  linkToApp: boolean

  /** Whether to link to an archive URL */
  linkToArchive: boolean

  /** The link to the screenshot image */
  imageLink: string

  /** The alt text for the screenshot image */
  imageAlt: string

  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const appId = this.route.snapshot.paramMap.get('appId')
    this.appService.getApp(appId)
      .subscribe(app => {
        this.application = app
        this.pageTitle = `${app.name} « Solutions`
        this.linkToApp = app.isActive || app.linkInactive
        this.linkToArchive = !app.isActive && !app.linkInactive && (app.archiveUrl > '')
        this.imageLink = `/assets/screenshots/${app.id}.png`
        this.imageAlt = `Screen shot for ${app.name}`
       })
  }

}
