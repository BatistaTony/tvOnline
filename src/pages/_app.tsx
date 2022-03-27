/* eslint-disable require-jsdoc */
import App from 'next/app'
import { GloablStyle, theme } from './../styles/layout.theme'
import { ThemeProvider } from 'styled-components'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GloablStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
