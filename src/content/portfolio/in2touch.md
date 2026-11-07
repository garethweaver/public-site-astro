---
slug: in2touch
url: /portfolio/in2touch
order: 210
thumb:
  url: https://ik.imagekit.io/garethweaver/thumb-in2touch.jpg
  gradient: 185
title: In2Touch / TouchFootballAU App
external: false
type: Webapp
year: 2024|2019
tools: NextJs, Firebase, Sass, Node
repository: https://github.com/garethweaver/in2touch-unofficial
live_site: http://in2touch-unofficial.co.uk/
images:
  - url: https://ik.imagekit.io/garethweaver/in2touch-1-lg.jpg
    alt: The app showing the homescreen with team and league data
    height: 1067
    width: 1200
    mobile:
      url: https://ik.imagekit.io/garethweaver/in2touch-1-sm.jpg
      height: 1067
      width: 600
  - url: https://ik.imagekit.io/garethweaver/in2touch-2-lg.jpg
    alt: The app showing the a team's fixtures
    height: 1067
    width: 1200
    mobile:
      url: https://ik.imagekit.io/garethweaver/in2touch-2-sm.jpg
      height: 1067
      width: 600
  - url: https://ik.imagekit.io/garethweaver/in2touch-3-lg.jpg
    alt: The app showing the a league table
    height: 1067
    width: 1200
    mobile:
      url: https://ik.imagekit.io/garethweaver/in2touch-3-sm.jpg
      height: 1067
      width: 600
next_page: /papier-tales
meta:
  title: Gareth Weaver - In2Touch App
  description: A personal project to show team and league results for the
    In2Touch sports league in the UK.
---
A personal project to show team and league results from both the UK In2Touch
rugby leagues and Touch Football Australia BMTA.

The two webapp allow you to find and pin teams and leagues to your homescreen
with data fed from a Firebase backend. Users can also select themes and view
results of other teams. Two node jobs running from github actions scrape data
from both rather outdated In2Touch and Touch Football Australia websites and
saves it to realtime Firebase databases.

The new frontends are built from the same NextJs and deployed with different
configurations. The user data is cached locally to reduce server load white
Firebase listens in realtime ready to update any cached data. Currently the app
isn't deployed to an app store but can be added to mobile homescreens and run as
a webapp.

You can find all the repositories here:

* <a href="https://github.com/garethweaver/in2touch-unofficial" target="_blank" rel="noopener noreferrer">NextJs frontends \[2024\]</a>
* <a href="https://github.com/garethweaver/in2touch-node" target="_blank" rel="noopener noreferrer">Backend Node scraper UK \[2019\]</a>
* <a href="https://github.com/garethweaver/touchau-node/" target="_blank" rel="noopener noreferrer">Backend Node scraper AU \[2026\]</a>
* <a href="https://github.com/garethweaver/in2touch-react" target="_blank" rel="noopener noreferrer" style="opacity: 0.5;">Create React App, Redux \[2019\]</a>
