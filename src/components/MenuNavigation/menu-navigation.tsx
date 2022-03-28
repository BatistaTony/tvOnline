import {
  MenuNavigationContainer,
  MenuContainer,
  LogoContainer,
  MenuFooterContainer,
  MenuItem,
  MenuTitle
} from './menu-navigation.styles'
import { menuNavigations, NavigationsType } from './menu-navigation-data'
import { useCallback, useContext, useMemo } from 'react'
import { GlobalContext } from 'context/gloabl.context'
import { useRouter } from 'next/router'
import React from 'react'

const MenuNavigation = () => {
  const router = useRouter()

  const navigateTo = (route: string) => {
    router.push(`/${route.toLowerCase()}`)
  }

  const checkRoute = () =>
    useMemo(() => {
      const title = router.pathname.replace('/', '')
      console.log(title)
      return title
    }, [router.pathname])

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
            isActive={checkRoute() === item.title.toLowerCase()}
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
