---
slug: in2touch
url: /portfolio/in2touch
order: 180
thumb:
  url: https://ik.imagekit.io/garethweaver/thumb-in2touch.jpg
  gradient: 185
title: In2Touch App
external: false
type: React Application
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
next_page: /maison-hanko
meta:
  title: Gareth Weaver - In2Touch App
  description: A personal project to show team and league results for the
    In2Touch sports league in the UK.
---
A personal project to show team and league results from the In2Touch rugby
leagues across the UK. The app allows you to find and pin teams and leagues to
your homescreen with data fed from a Firebase backend. Users can also select
themes and view results of other teams. A node script run from github actions
scrapes data from the rather dated In2Touch website and saves it to a realtime
Firebase database.

The new frontend is built NextJs although tbh I ended up fighting it. Data is
cached locally to reduce server load and speed up navigation. Firebase listens
in realtime ready to update any cahced data. Currently the app isn't deployed
to an app store but can be added to mobile homescreens and run as a webapp.

You can find all the repositories here:

* <a href="https://github.com/garethweaver/in2touch-unofficial" target="_blank" rel="noopener noreferrer">NextJs \[2024\]</a>
* <a href="https://github.com/garethweaver/in2touch-node" target="_blank" rel="noopener noreferrer">Backend Node web scraper \[2019\]</a>
* <a href="https://github.com/garethweaver/in2touch-react" target="_blank" rel="noopener noreferrer" style="opacity: 0.5;">Create React App, Redux \[2019\]</a>
