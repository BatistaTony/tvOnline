import styled from 'styled-components'

const centerElement = `
    display:flex;
    align-items:center;
    justify-content:center;
`

export const MenuNavigationContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: red;
  position: relative;
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: gray;
  ${centerElement}
`

export const MenuTitle = styled.h3`
  width: 100%;
`

export const MenuContainer = styled.ul`
  width: 100%;
  height: auto;
  list-style: none;
`

export const MenuItem = styled.li``

export const MenuFooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: pink;
  ${centerElement}
`
