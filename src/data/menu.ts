interface MenuItem {
  title: string,
  icon: string,
  props: {
    target: string,
    href: string,
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
    title: 'Twitter',
    icon: 'twitter',
    props: {
      target: '_blank',
      href: 'https://twitter.com/garethdweaver',
    },
  },
  {
    title: 'CV.pdf',
    icon: 'pdf',
    props: {
      target: '_blank',
      href: '/GarethWeaverCV.pdf',
    },
  }
]
