import React, { createContext, useContext } from 'react'
import App from './App'

const AppContext = createContext()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' 


function AppProvider({children}) {
    return (
        <AppContext.Provider>
            { children }
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
}

export { AppProvider, AppContext } 