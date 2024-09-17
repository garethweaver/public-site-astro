interface MenuItem {
  title: string
  icon: string
  props: {
    target?: string
    href: string
  }
}

export const menuItems: MenuItem[] = [
  {
    title: 'Codepen',
    icon: 'codepen',
    props: {
      target: '_blank',
      href: 'https://codepen.io/garethdweaver',
    },
  },
  {
    title: 'LinkedIn',
    icon: 'linkedin',
    props: {
      target: '_blank',
      href: 'https://www.linkedin.com/in/garethweaver',
    },
  },
  {
    title: 'Haikus',
    icon: 'pencil',
    props: {
      href: '/haikus/1',
    },
  },
  {
    title: 'CV.pdf',
    icon: 'pdf',
    props: {
      target: '_blank',
      href: '/GarethWeaverCV',
    },
  },
]
