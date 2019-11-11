import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { ApplicationComponent } from './application.component'
import { ApplicationListComponent } from './application-list/application-list.component'
import { ApplicationListItemComponent } from './application-list-item/application-list-item.component'
import { PrayerTrackerComponent } from './solutions/prayer-tracker.component'
import { ApplicationHeaderComponent } from './application-header/application-header.component'
import { AllSolutionsLinkComponent } from './all-solutions-link.component'
import { ApplicationImageComponent } from './application-image/application-image.component'
import { VirtualPrayerRoomComponent } from './solutions/virtual-prayer-room.component'
import { ApplicationDetailDirective } from './application-detail.directive'
import { BayVistaComponent } from './solutions/bay-vista.component'
import { CassyFianoComponent } from './solutions/cassy-fiano.component'
import { DrMelissaClouthierComponent } from './solutions/dr-melissa-clouthier.component';
import { EmeraldMountainChristianSchoolComponent } from './solutions/emerald-mountain-christian-school.component';
import { FutilityClosetComponent } from './solutions/futility-closet.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HardCorpsWifeComponent } from './solutions/hard-corps-wife.component';
import { LibertyPunditsComponent } from './solutions/liberty-pundits.component'

@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationListComponent,
    ApplicationListItemComponent,
    PrayerTrackerComponent,
    ApplicationHeaderComponent,
    AllSolutionsLinkComponent,
    ApplicationImageComponent,
    VirtualPrayerRoomComponent,
    ApplicationDetailDirective,
    BayVistaComponent,
    CassyFianoComponent,
    DrMelissaClouthierComponent,
    EmeraldMountainChristianSchoolComponent,
    FutilityClosetComponent,
    QuotesComponent,
    HardCorpsWifeComponent,
    LibertyPunditsComponent
  ],
  entryComponents: [
    BayVistaComponent,
    CassyFianoComponent,
    DrMelissaClouthierComponent,
    EmeraldMountainChristianSchoolComponent,
    FutilityClosetComponent,
    HardCorpsWifeComponent,
    LibertyPunditsComponent,
    PrayerTrackerComponent,
    VirtualPrayerRoomComponent
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
