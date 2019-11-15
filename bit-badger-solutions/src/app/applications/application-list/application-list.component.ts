import { Component, OnInit } from '@angular/core'

import { ApplicationService } from '../application.service'
import { App } from '../application.types'

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html'
})
export class ApplicationListComponent implements OnInit {

  current: App[]

  past: App[]

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.getApps().subscribe(apps => {
      this.current = apps.filter(app => app.isActive && !app.noAboutLink)
      this.past = apps.filter(app => !app.isActive && !app.noAboutLink)
    })
  }

}
