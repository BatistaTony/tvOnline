import { MenuNavigation } from 'components'
import { LayoutContainer, LayoutContent } from './layout.styles'

interface CustomLayoutProps {
  children: React.ReactNode
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
  return (
    <LayoutContainer>
      <MenuNavigation />
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  )
}

export { CustomLayout }
