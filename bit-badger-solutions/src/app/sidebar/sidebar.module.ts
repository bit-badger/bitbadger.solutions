import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SidebarComponent } from './sidebar/sidebar.component'
import { SidebarAppComponent } from './sidebar-app/sidebar-app.component'
import { SidebarCategoryComponent } from './sidebar-category/sidebar-category.component'

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarAppComponent,
    SidebarCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
