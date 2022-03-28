import Home from './../../assets/icons/home.svg'

interface NavigationsType {
  title: string
  icon: React.ReactNode
}

const menuNavigations: NavigationsType[] = [
  {
    title: 'Sports',
    icon: <Home />
  },
  {
    title: 'Movies',
    icon: <Home />
  },
  {
    title: 'Series',
    icon: <Home />
  },
  {
    title: 'Channels',
    icon: <Home />
  },
  {
    title: 'Settings',
    icon: <Home />
  }
]

export { menuNavigations }

export type { NavigationsType }
