/* eslint-disable require-jsdoc */
import App from 'next/app'
import { GloablStyle, theme } from './../styles/layout.theme'
import { ThemeProvider } from 'styled-components'
import { AppContextProvider } from './../context/gloabl.context'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <GloablStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContextProvider>
    )
  }
}

export default MyApp
