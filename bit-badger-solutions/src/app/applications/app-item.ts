import { Type } from '@angular/core'

/** An item representing an app */
export class AppItem {
  constructor(public name: string, public component: Type<any>) { }
}
