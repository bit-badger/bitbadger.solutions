import { Component, OnInit, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-page-title',
  template: ''
})
export class PageTitleComponent implements OnInit {

  @Input() title: string

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(`${this.title} « Bit Badger Solutions`)
  }

}
