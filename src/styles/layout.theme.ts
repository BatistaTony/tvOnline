import { createGlobalStyle } from 'styled-components'

const GloablStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;

                }
`

const theme = {
  colors: {
    button: {
      primary: ''
    }
  }
}

export { theme, GloablStyle }
