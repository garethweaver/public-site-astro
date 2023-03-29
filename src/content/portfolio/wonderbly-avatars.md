---
slug: wonderbly-avatars
url: /folio/wonderbly-avatars
order: 180
thumb:
  url: //via.placeholder.com/850x620/7b35d3/ffffff
title: Wonderbly Avatars
external: false
type: React Component
year: 2021
tools: React, Hooks, Sass
live_site: https://www.wonderbly.com/personalized-products/super-epic-love-quest-book
images:
  - url: https://ik.imagekit.io/garethweaver/avatars-1-lg.jpg
    alt:
    height: 1067
    width: 1200
    mobile:
      url: https://ik.imagekit.io/garethweaver/avatars-1-sm.jpg
      height: 900
      width: 600
  - url: https://ik.imagekit.io/garethweaver/avatars-2-lg.jpg
    alt:
    height: 1067
    width: 1200
    mobile:
      url: https://ik.imagekit.io/garethweaver/avatars-2-sm.jpg
      height: 900
      width: 600
next_page: /in2touch
meta:
  title: Gareth Weaver - Wonderbly Avatars
  description: A highly interactive react UI component to customise and create more unique avatars
    for Wonderbly books
---
At Wonderbly we wanted to offer a more diverse range of characters in our books
than the usual 6 boys and 6 girls. I was tasked to build a stand-alone component
which guides the user through steps to create their personalised avatar.

In theory the component can be configured to offer a creation journey for each
story with an infinite number of characters with an infinite number of steps and
form fields offering any number of customisation params. Character types can
also vary from eachother, for example: adult and child.

With our current customisations we now offer over 1000 different combinations
for each character type involving customisation such as glasses and even beards.

Under the hood the component and subcomponents are driven by a data provider and
hooks. The customsaition journey is driven by a book schema endpoint and
decorated with translatable content from our CMS. I worked hard to polish the
user interactions and animations while trying to keep the code simple. Oh, and
the component also supports editing of previously made avatars too.
