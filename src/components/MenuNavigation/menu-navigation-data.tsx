import SportIcon from './../../assets/icons/box.svg'

interface NavigationsType {
  title: string
  icon: React.ReactNode
}

const menuNavigations: NavigationsType[] = [
  {
    title: 'Sports',
    icon: <SportIcon />
  },
  {
    title: 'Movies',
    icon: <SportIcon />
  }
]

export { menuNavigations }

export type { NavigationsType }
