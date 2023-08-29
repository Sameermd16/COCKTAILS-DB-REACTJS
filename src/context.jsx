import React, { createContext, useContext, useState } from 'react'
import App from './App'

const AppContext = createContext()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' 


function AppProvider({children}) {

    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])


    const props = {loading, searchTerm, cocktails}

    return (
        <AppContext.Provider value={props} >
            { children }
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
}

export { AppProvider, AppContext } 