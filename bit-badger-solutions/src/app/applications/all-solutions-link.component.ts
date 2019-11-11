import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-all-solutions-link',
  template: `<p><br><a routerLink="/solutions">&laquo; Back to All Solutions</a></p>`
})
export class AllSolutionsLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
