import React, { createContext, useState } from 'react'

interface GlobalContextType {
  currentPage: string
  setCurrentPage: (route: string) => void
}

const contextInitialState: GlobalContextType = {
  currentPage: 'sports',
  setCurrentPage: () => {}
}

const GlobalContext = createContext<GlobalContextType>(contextInitialState)

interface AppContextProviderProps {
  children: React.ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(
    contextInitialState.currentPage
  )

  return (
    <GlobalContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { AppContextProvider, GlobalContext }
