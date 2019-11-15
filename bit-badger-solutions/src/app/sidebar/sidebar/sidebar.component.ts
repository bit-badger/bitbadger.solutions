import { Component, OnInit } from '@angular/core'

import { Category } from 'src/app/applications/application.types'
import { ApplicationService } from 'src/app/applications/application.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  cats: Category[]

  constructor(private appService: ApplicationService) { }

  ngOnInit() {
    this.appService.getCategories().subscribe(cats => this.cats = cats)
  }

}
