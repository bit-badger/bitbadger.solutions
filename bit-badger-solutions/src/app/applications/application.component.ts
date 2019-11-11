import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ApplicationService } from './application.service'
import { App } from './application.types'
import { AppItem } from './app-item'
import { ApplicationDetailDirective } from './application-detail.directive'
import { AppDetailComponent } from './solutions/app-detail.component'

import { PrayerTrackerComponent } from './solutions/prayer-tracker.component'
import { VirtualPrayerRoomComponent } from './solutions/virtual-prayer-room.component'
import { BayVistaComponent } from './solutions/bay-vista.component'
import { CassyFianoComponent } from './solutions/cassy-fiano.component'
import { DrMelissaClouthierComponent } from './solutions/dr-melissa-clouthier.component'
import { EmeraldMountainChristianSchoolComponent } from './solutions/emerald-mountain-christian-school.component'
import { FutilityClosetComponent } from './solutions/futility-closet.component'
import { HardCorpsWifeComponent } from './solutions/hard-corps-wife.component'
import { LibertyPunditsComponent } from './solutions/liberty-pundits.component'

@Component({
  selector: 'app-application',
  template: '<ng-template app-application-detail></ng-template>'
})
export class ApplicationComponent implements OnInit {

  private apps = [
    new AppItem('bay-vista', BayVistaComponent),
    new AppItem('cassy-fiano', CassyFianoComponent),
    new AppItem('dr-melissa-clouthier', DrMelissaClouthierComponent),
    new AppItem('emerald-mountain-christian-school', EmeraldMountainChristianSchoolComponent),
    new AppItem('futility-closet', FutilityClosetComponent),
    new AppItem('hard-corps-wife', HardCorpsWifeComponent),
    new AppItem('liberty-pundits', LibertyPunditsComponent),
    new AppItem('prayer-tracker', PrayerTrackerComponent),
    new AppItem('virtual-prayer-room', VirtualPrayerRoomComponent)
  ]

  @ViewChild(ApplicationDetailDirective, { static: true }) appDetail: ApplicationDetailDirective

  /** The app we're displaying */
  application: App

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appService: ApplicationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.displayApp(params['appId']))
  }

  /** Dynamically load the app-ropriate component */
  displayApp(appId: string) {
    const appComponent = this.apps.find(a => a.name === appId)

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(appComponent.component)
    const viewContainerRef = this.appDetail.viewContainerRef
    viewContainerRef.clear()

    const componentRef = viewContainerRef.createComponent(componentFactory)
    this.appService.getApp(appId)
      .subscribe(app => {
        (<AppDetailComponent>componentRef.instance).app = app
        this.application = app
      })
  }
  
}
