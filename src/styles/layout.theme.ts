import { createGlobalStyle } from 'styled-components'

const loadFont = (
  type:
    | 'Black'
    | 'BlackItalic'
    | 'Bold'
    | 'BoldItalic'
    | 'Italic'
    | 'Light'
    | 'Thin'
    | 'ThinItalic'
    | 'Regular'
    | 'LightItalic' = 'Regular'
) => {
  return `
    @font-face {
      src: url(./../assets/fonts/Lato/Lato-${type}.ttf);
      font-family: Lato-${type};
    }
    font-family: Lato-${type};
  `
}

const GloablStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        ${loadFont()};
    }
`

const theme = {
  colors: {
    orange: '#FF601D',
    menu: {
      bg: '#2F2D37',
      primaryTextColor: '#5F5E68',
      secondaryTextColor: '#FFFFFF',
      item: {
        activeBg: '#3F3D46'
      }
    },
    events: { item_bg: '#606266', points: '#4B4B4B' }
  }
}

export { theme, GloablStyle, loadFont }
