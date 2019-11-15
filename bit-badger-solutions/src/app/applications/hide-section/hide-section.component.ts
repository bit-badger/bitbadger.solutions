import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-hide-section',
  templateUrl: './hide-section.component.html',
  styleUrls: ['./hide-section.component.sass'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HideSectionComponent implements OnInit {

  @Input() heading: string

  label = '&#x25BC;'

  shown = false

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.shown = !this.shown
    this.label = this.shown ? '&#x25B2;' : '&#x25BC;'
  }

}
