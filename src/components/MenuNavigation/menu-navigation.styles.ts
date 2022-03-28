import styled from 'styled-components'
import { loadFont } from 'styles/layout.theme'

const centerElement = `
    display:flex;
    align-items:center;
    justify-content:center;
`

export const MenuNavigationContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.menu.bg};
  position: relative;
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 100px;
  ${centerElement};

  h1 {
    font-size: 2rem;
    ${loadFont('Bold')};
    color: #fff;
  }
`

const itemsPadding = '30px'

export const MenuTitle = styled.h3`
  width: 100%;
  padding-left: ${itemsPadding};
  color: ${props => props.theme.colors.menu.primaryTextColor};
  font-size: 1rem;
  ${loadFont()};
  margin-bottom: 10px;
`

export const MenuContainer = styled.ul`
  width: 100%;
  height: auto;
  list-style: none;
`

interface MenuItemProps {
  isActive: boolean
}

export const MenuItem = styled.li<MenuItemProps>`
  padding-left: ${itemsPadding};
  width: 100%;
  height: 40px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.menu.item.activeBg : 'transparent'};
  color: ${props =>
    props.isActive
      ? props.theme.colors.menu.secondaryTextColor
      : props.theme.colors.menu.primaryTextColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  font-size: 0.8rem;
  border-right: 4px solid
    ${props => (props.isActive ? props.theme.colors.orange : 'transparent')};

  &:hover {
    background-color: ${props => props.theme.colors.menu.item.activeBg};
    color: ${props => props.theme.colors.menu.secondaryTextColor};

    svg {
      fill: ${props => props.theme.colors.menu.secondaryTextColor};
    }
  }

  svg {
    margin-right: 20px;
    transform: scale(0.7);
    fill: ${props =>
      props.isActive
        ? props.theme.colors.menu.secondaryTextColor
        : props.theme.colors.menu.primaryTextColor};
  }
`

export const MenuFooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  ${centerElement};
`
