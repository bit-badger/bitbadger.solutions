import { App } from '../application.types'

/** An inteface implemented by all app detail components */
export class AppDetailComponent {
  
  /** The app to be displayed */
  app: App

  /** The page title based on this app */
  get pageTitle () {
    return `${this.app.name} « Solutions`
  }

}
