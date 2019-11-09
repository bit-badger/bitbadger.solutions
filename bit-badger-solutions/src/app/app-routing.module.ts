import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { InformationPublicizingComponent } from './pages/about/information-publicizing.component'
import { LegacyDataComponent } from './pages/about/legacy-data.component'
import { ProcessAutomationComponent } from './pages/about/process-automation.component'
import { WebServicesComponent } from './pages/about/web-services.component'
import { WhyBitBadgerComponent } from './pages/about/why-bit-badger.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/information-publicizing-solutions', component: InformationPublicizingComponent },
  { path: 'about/legacy-data', component: LegacyDataComponent },
  { path: 'about/process-automation-solutions', component: ProcessAutomationComponent },
  { path: 'about/web-services-solutions', component: WebServicesComponent },
  { path: 'about/why-bit-badger', component: WhyBitBadgerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
