/** A category of application */
export class Category {

  /**
   * Construct a new instance
   * @param id The ID of the category
   * @param name The name of the category
   */
  constructor(public id: number, public name: string) {
    this.id = id
    this.name = name
  }
  
  /** Sites/applications not otherwise specified */
  static SITES_APPS = 1

  /** WordPress sites */
  static WORDPRESS = 2

  /** Statically generated sites */
  static STATIC = 3
  
  /** Daniel's personal sites */
  static PERSONAL = 99
}

/** A quote from an app */
export class Quote {
  
  /** The full text of the quote */
  full: string = ''

  /** Shorter portions of the full quote */
  pull: string[] = []
  
  /**
   * Construct a new instance
   * @param name The name of the person who provided the quote
   * @param from What organization the person who provided the quote represents
   */
  constructor(public name: string, public from: string) { }
}

/** A description of a part of the technology stack used */
export class Technology {
    
  /**
   * Construct a new instace
   * @param name The name of the technology
   * @param usedFor What aspect was addressed by this technology
   * @param current Whether this technology is currently in use in the solution
   */
  constructor(public name: string, public usedFor: string, public current: boolean = false) { }
}

/** An application or web site */
export class App {
  
  /** Whether this app is active (default true) */
  isActive: boolean = true

  /** The ID of the category to which this app belongs (default "Web Sites and Applictions") */
  categoryId: number = Category.SITES_APPS

  /** Whether to skip displaying an About link on the front page */
  noAboutLink: boolean = false

  /** Whether the generate a link for an inactive app (defaults to false) */
  linkInactive: boolean = false

  /** The text to use for the short description in the front page sidebar */
  frontPageText: string = ''

  /** The order (within category) in which this app should be displayed */
  frontPageOrder: number = 0

  /** The text to display for the application on this index page */
  indexText: string = ''

  /** The URL where an archived version of this app may be found */
  archiveUrl: string = ''

  /** The technology used for this app */
  techStack: Technology[] = []

  /** Customer quotes */
  quotes: Quote[] = []

  /**
   * Construct a new instance
   * @param id The ID of the app
   * @param name The name of the app
   * @param url The URL of the app
   */
  constructor(public id: string, public name: string, public url: string) { }
}
