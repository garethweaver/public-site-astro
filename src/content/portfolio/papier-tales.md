---
slug: papier-tales
url: /portfolio/papier-tales
order: 190
thumb:
  url: https://ik.imagekit.io/garethweaver/papier-tales-thumb.jpg
  gradient: 135
title: Papier Tales
external: false
type: Bespoke Print Service
year: 2026
tools: Turborepo, AstroJs, Google Cloud Run
live_site: https://www.papiertales.com/
images:
  - url: https://ik.imagekit.io/garethweaver/papier-tales-3.jpg
    alt: Papier tales creation gui
    height: 1381
    width: 2400
  - url: https://ik.imagekit.io/garethweaver/papier-tales-1.jpg
    alt: Papier tales dashboard
    height: 1381
    width: 2400
  - url: https://ik.imagekit.io/garethweaver/papier-tales-2.jpg
    alt: Printed copies of papier tales books
    height: 2400
    width: 2400
next_page: /sdo-google-reviews
meta:
  title: Gareth Weaver - Papier Tales
  description: A bespoke book binding service that turns JSON payloads into
    print quality PDFs using Google Cloud Run jobs.
---
A bespoke book binding service that takes JSON payloads and outputs print
quality PDFs. Books are templated in YAML, combining assets and text to output
customised products for each order.

The project is structured as a Turborepo monorepo with an AstroJs frontend, while
the PDF rendering and print house uploads run as Google Cloud Run jobs. Each book
can be generated on demand with a configuration of assets, character names, and
in different size formats.
