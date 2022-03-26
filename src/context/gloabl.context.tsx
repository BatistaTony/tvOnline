import React, { createContext } from 'react'

const GlobalContext = createContext<unknown>('something')

interface AppContextProviderProps {
  children: React.ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <GlobalContext.Provider value={'yes'}>{children}</GlobalContext.Provider>
  )
}

export { AppContextProvider }
