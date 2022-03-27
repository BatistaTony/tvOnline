import { LayoutStyled } from './layout.styles'

interface CustomLayoutProps {
  children: React.ReactNode
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
  return <LayoutStyled>{children}</LayoutStyled>
}

export { CustomLayout }
