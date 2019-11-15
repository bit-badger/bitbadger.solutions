import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-bit-badger-blog',
  templateUrl: './bit-badger-blog.component.html'
})
export class BitBadgerBlogComponent extends AppDetailComponent {

  @Input() app: App

  constructor() {
    super()
  }

}
