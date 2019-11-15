import { Component, Input } from '@angular/core';

import { AppDetailComponent } from './app-detail.component';
import { App } from '../application.types';

@Component({
  selector: 'app-virtual-prayer-room',
  templateUrl: './virtual-prayer-room.component.html'
})
export class VirtualPrayerRoomComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
