---
title: Emerald Mountain Christian School
url: http://www.emeraldmountainchristianschool.org
summary: Classical, Christ-centered education near Wetumpka, Alabama
category: Web Sites and Applications
isInactive: true
frontPage:
  display: false
technologies:
  - PHP:
      for: page generation and interactivity
  - ASP.NET MVC:
      for: page generation and interactivity
  - PostgreSQL:
      for: data storage
  - Rackspace Cloud:
      for: hosting
  - Azure:
      for: hosting
---
### The Client

Emerald Mountain Christian School is a private Christian school founded over 50 years ago. They use the Principle Approach&reg;, which emphasizes research, reasoning, relating, and recording to help students synthesize the information they learn, rather than just requiring rote memorization. More information about the school&rsquo;s rich history can be found on their site.

### The Problem

They had a website with very basic information and very little styling; they also had no way of updating it.

### The Solution

In 2004, we developed a theme that brought it in line with the design of their printed materials, adding the school calendar of events and the entirety of their Parent Information Packet, giving prospective families the information the needed to determine if the school was a good fit for their students.

### The Epilogue

In 2013, we passed off the content and hosting of the site to a new maintainer. They have since redesigned it; it is accessible via the URL above, and at [EMCSpatriots.org](http://emcspatriots.org "EMCS Patriots").

<hidden-section heading="The Process">

  Initially, we downloaded the content from their old site, and put it into a custom PHP-based framework. We then added a database of events, and a calendar page that read that database, enabling us to display multiple years, as well as future and past years. The design of the online information packet looked like a tabbed notebook, with each page highlighting a different tab.

  In 2011, we switched the site to use ASP.NET MVC instead of the custom PHP solution, and migrated the data from MySQL to PostgreSQL; these efforts increased the performance of the site.

</app-hide-section>
