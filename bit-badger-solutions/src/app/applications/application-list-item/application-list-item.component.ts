import { Component, OnInit, Input } from '@angular/core'

import { App } from '../application.types'

@Component({
  selector: 'app-application-list-item',
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.sass']
})
export class ApplicationListItemComponent implements OnInit {

  @Input() app: App

  constructor() { }

  ngOnInit() { }

}
