---
slug: sdo-google-reviews
url: /portfolio/sdo-google-reviews
order: 175
thumb:
  url: https://ik.imagekit.io/garethweaver/sdo-reviews-thumb.png?updatedAt=1793933966708
  gradient: 200
title: SDO Google Reviews
external: false
type: Integration
year: 2026
tools: GitHub Actions, Firebase, AstroJs
live_site: https://www.sdosteopaths.co.uk/
images:
  - url: https://ik.imagekit.io/garethweaver/sdo-reviews-1-lg.jpg
    alt: The google reviews custom widget on the SDO site
    height: 2400
    width: 2134
    mobile:
      url: https://ik.imagekit.io/garethweaver/sdo-reviews-1-sm.jpg
      height: 1200
      width: 2134
  - url: https://ik.imagekit.io/garethweaver/sdo-reviews-2.jpg
    alt: The lighthouse scores for sdo
    height: 1062
    width: 1900
next_page: /veme
meta:
  title: Gareth Weaver - SDO Google Reviews
  description: A widget that statically renders Google Reviews using GitHub
    Actions, Firebase and AstroJs, with no clientside JavaScript.
---
My solution to statically show public Google Reviews without the need to
compromise lighthouse scores or pay for 3rd party integrations. I wanted
buildtime rendering so I decided to scrape them from the Google API.

To do this I used a GitHub Action that runs once a week to fetch the
last 5 reviews and save them into a Firebase database. If any new reviews have
been added since the last check, the action triggers a new AstroJs site build,
which fetches the reviews from the Firebase database and renders them as static
HTML.
