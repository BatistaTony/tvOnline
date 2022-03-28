import {
  MenuNavigationContainer,
  MenuContainer,
  LogoContainer,
  MenuFooterContainer,
  MenuItem,
  MenuTitle
} from './menu-navigation.styles'
import { menuNavigations, NavigationsType } from './menu-navigation-data'
import { useContext } from 'react'
import { GlobalContext } from 'context/gloabl.context'

const MenuNavigation = () => {
  const { setCurrentPageRoute, currentPage } = useContext(GlobalContext)

  const navigateTo = (route: string) => {
    setCurrentPageRoute(route.toLowerCase())
  }

  return (
    <MenuNavigationContainer>
      <LogoContainer>
        <h1>Tv Online</h1>
      </LogoContainer>
      <MenuTitle>Navigation</MenuTitle>
      <MenuContainer>
        {menuNavigations.map((item: NavigationsType) => (
          <MenuItem
            onClick={() => navigateTo(item.title)}
            isActive={currentPage === item.title.toLowerCase()}
            key={item.title}
          >
            {item.icon} {item.title}
          </MenuItem>
        ))}
      </MenuContainer>
      <MenuFooterContainer>Something here</MenuFooterContainer>
    </MenuNavigationContainer>
  )
}

export default MenuNavigation
