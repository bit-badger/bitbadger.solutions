import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { ApplicationComponent } from './application/application.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationListItemComponent } from './application-list-item/application-list-item.component'

@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationListComponent,
    ApplicationListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ApplicationComponent,
    ApplicationListComponent
  ]
})
export class ApplicationsModule { }
