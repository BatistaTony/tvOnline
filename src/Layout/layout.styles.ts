import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100vh;
  overflow-y: auto;
`

export const LayoutContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.menu.bg};
`
