interface JobList {
  title: string
  meta: string[]
  date: {
    from: string
    to: string
    duration: string
  }
  body: string
}

export const jobsList: JobList[] = [
  {
    title: "Wonderbly",
    meta: [
      "Lead Frontend",
      "Publisher",
      "Astro",
    ],
    date: {
      from: 'OCT21',
      to: 'JAN24',
      duration: '2Y02M',
    },
    body: '<p>Promoted to lead frontend as the engineering team grew with investment. Responsibilities included, but were not limited to, the following. Line management and mentoring of 2 frontend engineers and a QA engineer. Hiring and interviewing of new applicants. Attending leads meetings to discuss technology, infrastructure and future direction of the <a href="https://www.wonderbly.com/" target="_blank">ecomm webapp</a>. Running workshops on various topics and technologies to upskill engineers across the business. Spiking and laying foundations for new complex UI components. Investigating and reporting on website performance. General everyday responsibilities tracking deployments and error reporting to maintain a working webapp with maximum uptime.</p><p>Some of the more recent work involved planning the deprecation pathway for the legacy React webapp while laying the groundwork inside the new Turborepo and Astro application to significantly lift performance scores. Among other things I oversaw a project to integrate Algolia search.<p>',
  },
  {
    title: "Wonderbly",
    meta: [
      "Senior Frontend",
      "Publisher",
      "React",
    ],
    date: {
      from: 'MAR20',
      to: 'OCT21',
      duration: '1Y08M',
    },
    body: '<p>A full time position within the digital team working predominantly on the ecommerce react/node application and external packages. My role was to regain order of the application while deprecating old code and removing inefficiencies as well as providing structure and standards to the team by mentoring junior developers. The application and its external packages are a mix of many new and older technologies due to its continued development: React, hooks, redux, webpack, jest, mocha, nightwatch/cucumber, scss, github workflows, prismic.</p>',
  },
  {
    title: "Collectiv Food",
    meta: [
      "Contract",
      "Logistics Startup",
      "Nuxt",
    ],
    date: {
      from: 'OCT19',
      to: 'DEC19',
      duration: '0Y03M',
    },
    body: '<p>A 6 week contract to rebuild Collectiv’s public facing marketing website. As instructed the site was built with Nuxt, PCSS, Vuex, and content was provided via Contentful.</p>',
  },
  {
    title: "Nexus Studios",
    meta: [
      "Contract",
      "Creative Agency",
      "Gatsby",
      "Vue",
    ],
    date: {
      from: 'AUG19',
      to: 'OCT19',
      duration: '0Y03M',
    },
    body: '<p>A 6 week contract working across multiple projects. Initially I built a simple <a href="https://gilda.co/" target="_blank">static brochure page</a> to showcase Nexus’ latest augmented reality project GILDA. ES6, Sass, and HTML partials were compiled and bundled with Webpack prior to deployment with static data rendered via Handlebars. I completed a <a href="https://maisonhanko.com/" target="_blank">static site</a> to showcase Japanese artists and their work before the olympics. The site was built with GatsbyJS with markdown data passed to React templates via GraphQL. I was also drafted in to help complete an interface for a WebGL project. The project was for a well know search provider and showcased works from Leonardo da Vinci’s codices in an interactive way. The UI was built in VueJS using a Vuex store.</p><p>I was also drafted in to help complete an interface for a WebGL project. The project was for a well know search provider and showcased works from Leonardo da Vinci’s codices in an interactive way. The UI was built in VueJS using a Vuex store.</p>',
  },
  {
    title: "In2Touch Unoffical",
    meta: [
      "Personal Project",
      "React",
      "Node",
      "Firebase",
    ],
    date: {
      from: 'JUN19',
      to: 'JUL19',
      duration: '0Y02M',
    },
    body: '<p>I built a <a href="https://garethweaver.github.io/in2touch-react/" target="_blank">small react app</a> which sources data from an already existing website. The app allows users to browse, save teams and leagues to their homepage, and to see fixtures and league positions. A node script deployed to Heroku updates the Firebase database daily.</p>',
  },
  {
    title: "Kortical",
    meta: [
      "Contract",
      "ML Accelerator",
      "Gatsby",
    ],
    date: {
      from: 'FEB19',
      to: 'JUN19',
      duration: '0Y05M',
    },
    body: '<p>An extended three month contract to clean, refactor and modernise the frontend of Kortical’s machine learning GUI. I provided support advising on frontend architecture, systems and pipelines while auditing the current legacy markup. As directed I implemented a ‘halfway house’ re-skin of the application before working alongside a designer to rebuild their <a href="https://kortical.com/" target="_blank">public facing website</a> using GatsbyJs, React and Sass. The site is currently statically generated from yaml and markdown files using GraphQL queries with the mind in the future to migrate to an API.</p>',
  },
  {
    title: "Breakthrough Media",
    meta: [
      "Contract",
      "Comms Agency",
      "Vue",
    ],
    date: {
      from: 'NOV18',
      to: 'JAN19',
      duration: '0Y02M',
    },
    body: '<p>A two month contract working within the <a href="https://breakthroughmedia.org/" target="_blank">digital team</a> bug fixing and maintaining multiple VueJS and legacy websites for the Home Office and various charities. I also worked with Nuxt to help create a starter repo for future projects as well as writing bespoke tracking services for Google Tag Manager</p>',
  },
  {
    title: "Toaster",
    meta: [
      "Contract",
      "Digital Agency",
    ],
    date: {
      from: 'AUG18',
      to: 'SEP19',
      duration: '0Y02M',
    },
    body: '<p>As part of a small team we rebuilt the public facing side of <a href="https://www.google.co.uk/retail/" target="_blank">Google Retail</a>. The content was delivered from Kintaro and templates were compiled from Jinja, SCSS and ES6 to build a static site. I helped build components using the Google frameworks Glue and Hercules.</p>',
  },
  {
    title: "BusinessThreeZero",
    meta: [
      "Contract",
      "Business Consultancy",
      "Angular",
    ],
    date: {
      from: 'MAR17',
      to: 'JUL18',
      duration: '1Y04M',
    },
    body: '<p>An extended contract working across multiple Angular2 and Ionic applications writing Sass and Typescript as part of a close knit in-house digital team. Our team solved advanced technical issues which arose from a modular multi-tenant platform. Additional responsibilities included training of other developers, streamlining our development processes and build pipelines, and improving intra business relations between the development team and the <a href="https://www.businessthreezero.com/" target="_blank">consultancy team</a>. I was also heavily involved in generating product ideas and concepts as well as regularly providing an interface between the project manager and UI designers</p>',
  },
  {
    title: "Clubhouse Studios",
    meta: [
      "Contract",
      "Creative Agency",
    ],
    date: {
      from: 'SEP16',
      to: 'NOV16',
      duration: '0Y03M',
    },
    body: '<p>Worked to finalise the ‘My Account’ portal of <a href="https://www.byronhamburgers.com/" target="_blank">Byron Burger’s</a> website writing Handlebars, SCSS and jQuery. Completed a fully bespoke tumblr theme fed via the rather basic tumblr API for Stella McCartney written in ES6 and SASS. Also assisted the development of a microsite for Stella McCartney writing VueJs to deliver an interactive questionnaire and Facebook API integration to extract photos from user’s tagged photos and uploaded albums.</p>',
  },
  {
    title: "Big Sofa",
    meta: [
      "Frontend Engineer",
      "Digital Media Company",
      "Angular",
    ],
    date: {
      from: 'SEP14',
      to: 'AUG16',
      duration: '1Y11M',
    },
    body: '<p>Full time employment with broad responsibility. I worked on multiple AngularJS and Rails applications writing CoffeeScript, Haml and SCSS as well as basic Rails as part of a small agile development team. While managing and training junior members of the team I also directly managed international clients. I was heavily involved in leading and delivering a project from concept to completion for CMI Unilever. Additionally as a frontend specialist it was my responsibility to generate UI solutions and deliver interface designs to a high standard.</p>',
  },
  {
    title: "Big Sofa",
    meta: [
      "Contract",
      "Digital Media Company",
    ],
    date: {
      from: 'JUN14',
      to: 'SEP14',
      duration: '0Y03M',
    },
    body: '<p>A three month contract working with Bootstrap, Haml, SCSS and CoffeeScript to rebuild the frontend of the Big Sofa web app based on pre-provided designs. I worked between the project technical lead and the junior development team.</p>',
  },
  {
    title: "Selfridges & Co",
    meta: [
      "Contract",
      "Online Retailer",
    ],
    date: {
      from: 'MAY14',
      to: 'JUN14',
      duration: '0Y01M',
    },
    body: '<p>A three week contract placed within Selfridges’ online team. I worked closely with the design team to construct markup for the online store and website. I was also tasked with the templating and testing of responsive marketing emails delivered via SmartFocus.',
  },
  {
    title: "Yello Studio",
    meta: [
      "Fullstack Developer",
      "Creative Agency",
    ],
    date: {
      from: 'JAN11',
      to: 'SEP13',
      duration: '2Y09M',
    },
    body: '<p>Worked as a key member of <a href="http://www.yellostudio.co.uk/" target="_blank">the studio</a> supporting both the technical and creative directors while also handling agency clients. I worked independently and collaboratively on larger projects providing UI solutions as well as attending client meetings, managing clients and delivering training. My role covered bespoke design, frontend development and back-end development, CMS integration, email marketing and analytics.',
  },
]
