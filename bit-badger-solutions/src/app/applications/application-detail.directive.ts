import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[app-application-detail]'
})
export class ApplicationDetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
