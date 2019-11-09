import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { PageTitleComponent } from './page-title.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageTitleComponent
  ]
})
export class SharedModule { }
