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
  }
]

export { menuNavigations }

export type { NavigationsType }
