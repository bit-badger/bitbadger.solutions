import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import Data from './application.data'
import { Category, App } from './application.types'

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  /**
   * Get all categories of apps
   */
  getCategories(): Observable<Category[]> {
    return of(Data.categories)
  }

  /**
   * Get all apps
   */
  getApps(): Observable<App[]> {
    return of(Data.apps)
  }

  /**
   * Get all applications for the given category ID
   * @param categoryId The ID of the category for which apps should be retrieved
   */
  getAppsForCategory(categoryId: number): Observable<App[]> {
    return of(
      Data.apps
        .filter(app => app.categoryId === categoryId)
        .sort((a, b) => a.frontPageOrder - b.frontPageOrder)
    )
  }

  /**
   * Get a specific app
   * @param appId The ID of the app to retrieve
   */
  getApp(appId: string): Observable<App> {
    return of(Data.apps.find(app => app.id === appId))
  }

}
