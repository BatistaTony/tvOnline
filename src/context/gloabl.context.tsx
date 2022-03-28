import React, { createContext, useState } from 'react'

interface GlobalContextType {
  currentPage: string
  setCurrentPageRoute: (route?: string) => void
}

const contextInitialState: GlobalContextType = {
  currentPage: 'sports',
  setCurrentPageRoute: () => {}
}

const GlobalContext = createContext<GlobalContextType>(contextInitialState)

interface AppContextProviderProps {
  children: React.ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(
    contextInitialState.currentPage
  )

  const setCurrentPageRoute = (route: string) => {
    setCurrentPage(route)
  }

  return (
    <GlobalContext.Provider value={{ currentPage, setCurrentPageRoute }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { AppContextProvider, GlobalContext }
