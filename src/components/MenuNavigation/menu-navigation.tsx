import {
  MenuNavigationContainer,
  MenuContainer,
  LogoContainer,
  MenuFooterContainer,
  MenuItem,
  MenuTitle
} from './menu-navigation.styles'
import { menuNavigations, NavigationsType } from './menu-navigation-data'

const MenuNavigation = () => {
  return (
    <MenuNavigationContainer>
      <LogoContainer>
        <h1>Tv Online</h1>
      </LogoContainer>
      <MenuTitle>Navigations</MenuTitle>
      <MenuContainer>
        {menuNavigations.map((item: NavigationsType) => (
          <MenuItem key={item.title}>
            {item.icon} {item.title}
          </MenuItem>
        ))}
      </MenuContainer>
      <MenuFooterContainer>Something here</MenuFooterContainer>
    </MenuNavigationContainer>
  )
}

export default MenuNavigation
