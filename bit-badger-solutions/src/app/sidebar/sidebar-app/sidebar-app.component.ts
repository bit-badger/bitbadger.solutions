import { Component, OnInit, Input } from '@angular/core'

import { App } from 'src/app/applications/application.types'

@Component({
  selector: 'app-sidebar-app',
  templateUrl: './sidebar-app.component.html',
  styleUrls: ['./sidebar-app.component.sass']
})
export class SidebarAppComponent implements OnInit {

  @Input() app: App

  constructor() { }

  ngOnInit() { }
  
  /** The title attribute for the About link */
  get aboutTitle () {
    return `About ${this.app.name} | Bit Badger Solutions`
  }

}
