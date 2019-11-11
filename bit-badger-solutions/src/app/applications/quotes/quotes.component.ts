import { Component, OnInit, Input } from '@angular/core'

import { Quote } from '../application.types'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.sass']
})
export class QuotesComponent implements OnInit {

  @Input() quotes: Quote[]

  constructor() { }

  ngOnInit() { }

}
