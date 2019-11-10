import { Component, OnInit, Input } from '@angular/core'

import { ApplicationService } from 'src/app/applications/application.service'
import { App, Category } from 'src/app/applications/application.types'

@Component({
  selector: 'app-sidebar-category',
  templateUrl: './sidebar-category.component.html',
  styleUrls: ['./sidebar-category.component.sass']
})
export class SidebarCategoryComponent implements OnInit {

  @Input() category: Category

  apps: App[]

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.getApps().subscribe(apps =>
      this.apps = apps
        .filter(app => app.isActive && app.categoryId === this.category.id)
        .sort((a, b) => a.frontPageOrder - b.frontPageOrder))
  }

}
