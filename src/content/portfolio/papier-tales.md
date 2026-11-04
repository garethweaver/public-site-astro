---
slug: papier-tales
url: /portfolio/papier-tales
order: 190
thumb:
  url: https://placehold.co/600x400/png?text=Papier+Tales
  gradient: 135
title: Papier Tales
external: false
type: Print Service
year: 2026
tools: Turborepo, Astro, Google Cloud Run
live_site: https://www.papiertales.com/
images:
  - url: https://placehold.co/1200x800/png?text=Papier+Tales+1
    alt: Placeholder image for Papier Tales
    height: 800
    width: 1200
    mobile:
      url: https://placehold.co/600x400/png?text=Papier+Tales+1
      height: 400
      width: 600
  - url: https://placehold.co/1200x800/png?text=Papier+Tales+2
    alt: Placeholder image for Papier Tales
    height: 800
    width: 1200
    mobile:
      url: https://placehold.co/600x400/png?text=Papier+Tales+2
      height: 400
      width: 600
next_page: /in2touch
meta:
  title: Gareth Weaver - Papier Tales
  description: A bespoke book binding service that turns JSON payloads into
    print quality PDFs using Google Cloud Run jobs.
---
A bespoke book binding service that takes JSON payloads and outputs print
quality PDFs. Books are templated in YAML, combining assets and text to output
customised products for each order.

The project is structured as a Turborepo monorepo with an Astro frontend, while
the PDF rendering runs as Google Cloud Run jobs so each book can be generated
on demand and scaled independently of the rest of the site.
