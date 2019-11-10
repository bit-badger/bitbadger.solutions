import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { ApplicationsModule } from './applications/applications.module'
import { SharedModule } from './shared/shared.module'
import { SidebarModule } from './sidebar/sidebar.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { WhyBitBadgerComponent } from './pages/about/why-bit-badger.component'
import { InformationPublicizingComponent } from './pages/about/information-publicizing.component'
import { LegacyDataComponent } from './pages/about/legacy-data.component'
import { ProcessAutomationComponent } from './pages/about/process-automation.component'
import { WebServicesComponent } from './pages/about/web-services.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhyBitBadgerComponent,
    InformationPublicizingComponent,
    LegacyDataComponent,
    ProcessAutomationComponent,
    WebServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationsModule,
    SharedModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
