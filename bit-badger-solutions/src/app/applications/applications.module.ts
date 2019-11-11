import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AllSolutionsLinkComponent } from './all-solutions-link.component'
import { ApplicationComponent } from './application.component'
import { ApplicationDetailDirective } from './application-detail.directive'
import { ApplicationHeaderComponent } from './application-header/application-header.component'
import { ApplicationImageComponent } from './application-image/application-image.component'
import { ApplicationListComponent } from './application-list/application-list.component'
import { ApplicationListItemComponent } from './application-list-item/application-list-item.component'
import { HideSectionComponent } from './hide-section/hide-section.component'
import { QuotesComponent } from './quotes/quotes.component';
import { SharedModule } from '../shared/shared.module'
import { TechnologyComponent } from './technology/technology.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

import { BayVistaComponent } from './solutions/bay-vista.component'
import { BitBadgerBlogComponent } from './solutions/bit-badger-blog.component';
import { CassyFianoComponent } from './solutions/cassy-fiano.component'
import { DrMelissaClouthierComponent } from './solutions/dr-melissa-clouthier.component';
import { EmeraldMountainChristianSchoolComponent } from './solutions/emerald-mountain-christian-school.component';
import { FutilityClosetComponent } from './solutions/futility-closet.component';
import { HardCorpsWifeComponent } from './solutions/hard-corps-wife.component';
import { LibertyPunditsComponent } from './solutions/liberty-pundits.component';
import { MindyMackenzieComponent } from './solutions/mindy-mackenzie.component';
import { MyPrayerJournalComponent } from './solutions/my-prayer-journal.component';
import { NsxComponent } from './solutions/nsx.component';
import { OlivetBaptistComponent } from './solutions/olivet-baptist.component';
import { PhotographyByMichelleComponent } from './solutions/photography-by-michelle.component';
import { PrayerTrackerComponent } from './solutions/prayer-tracker.component'
import { RiehlWorldNewsComponent } from './solutions/riehl-world-news.component';
import { SharkTankComponent } from './solutions/shark-tank.component';
import { TcmsComponent } from './solutions/tcms.component';
import { VirtualPrayerRoomComponent } from './solutions/virtual-prayer-room.component'

@NgModule({
  declarations: [
    AllSolutionsLinkComponent,
    ApplicationComponent,
    ApplicationDetailDirective,
    ApplicationHeaderComponent,
    ApplicationImageComponent,
    ApplicationListComponent,
    ApplicationListItemComponent,
    BayVistaComponent,
    BitBadgerBlogComponent,
    CassyFianoComponent,
    DrMelissaClouthierComponent,
    EmeraldMountainChristianSchoolComponent,
    FutilityClosetComponent,
    HardCorpsWifeComponent,
    HideSectionComponent,
    LibertyPunditsComponent,
    MindyMackenzieComponent,
    MyPrayerJournalComponent,
    NsxComponent,
    OlivetBaptistComponent,
    PhotographyByMichelleComponent,
    PrayerTrackerComponent,
    QuotesComponent,
    RiehlWorldNewsComponent,
    SharkTankComponent,
    TcmsComponent,
    TechnologyComponent,
    TechStackComponent,
    VirtualPrayerRoomComponent
  ],
  entryComponents: [
    BayVistaComponent,
    BitBadgerBlogComponent,
    CassyFianoComponent,
    DrMelissaClouthierComponent,
    EmeraldMountainChristianSchoolComponent,
    FutilityClosetComponent,
    HardCorpsWifeComponent,
    LibertyPunditsComponent,
    MindyMackenzieComponent,
    MyPrayerJournalComponent,
    NsxComponent,
    OlivetBaptistComponent,
    PhotographyByMichelleComponent,
    PrayerTrackerComponent,
    RiehlWorldNewsComponent,
    SharkTankComponent,
    TcmsComponent,
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
