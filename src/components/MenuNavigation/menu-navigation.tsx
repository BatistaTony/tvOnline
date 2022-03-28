import {
  MenuNavigationContainer,
  MenuContainer,
  LogoContainer,
  MenuFooterContainer,
  MenuItem,
  MenuTitle
} from './menu-navigation.styles'
import { menuNavigations, NavigationsType } from './menu-navigation-data'
import { useState } from 'react'

const MenuNavigation = () => {
  const [activeItem, setActiveItem] = useState<string>('Sports')

  const navigateTo = (route: string) => {
    setActiveItem(route)
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
            isActive={activeItem === item.title}
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
