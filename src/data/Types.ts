'use strict'

/** An activity performed for a customer */
export class Activity {

  /** The heading of the activity */
  heading: string

  /** A description of the activity */
  narrative: string

  /**
   * Construct a new instance
   * @param heading The heading of the activity
   * @param narrative The description of the activity
   */
  constructor(heading: string, narrative: string) {
    this.heading = heading
    this.narrative = narrative
  }
}

/** A category of application */
export class Category {

  /** The ID of the category */
  id: number

  /** The name of the category */
  name: string

  /**
   * Construct a new instance
   * @param id The ID of the category
   * @param name The name of the category
   */
  constructor(id: number, name: string) {
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
  
  /** The name of the person who provided the quote */
  name: string
  
  /** What organization the person who provided the quote represents */
  from: string

  /** The full text of the quote */
  full: string = ''

  /** Shorter portions of the full quote */
  pull: string[] = []
  
  /**
   * Construct a new instance
   * @param name The name of the person who provided the quote
   * @param from What organization the person who provided the quote represents
   */
  constructor(name: string, from: string) {
    this.name = name
    this.from = from
  }
}

/** A description of a part of the technology stack used */
export class Technology {

  /** The name of the technology */
  name: string

  /** What aspect was addressed by this technology */
  usedFor: string

  /**
   * Construct a new instace
   * @param name The name of the technology
   * @param usedFor What aspect was addressed by this technology
   */
  constructor(name: string, usedFor: string) {
    this.name = name
    this.usedFor = usedFor
  }
}

/** An application or web site */
export class App {
  
  /** The ID of the app */
  id: string

  /** The name of the app */
  name: string

  /** The URL of the app */
  url: string

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

  /** Paragraphs of text that describe the app */
  paragraphs: string[] = []

  /** Footnotes for the long description */
  footnotes: string[] = []

  /** Discrete activities performed for this app */
  activities: Activity[] = []

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
  constructor(id: string, name: string, url: string) {
    this.id = id
    this.name = name
    this.url = url
  }
}
