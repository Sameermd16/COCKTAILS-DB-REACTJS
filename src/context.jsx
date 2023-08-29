import React, { createContext, useContext, useEffect, useState } from 'react'
import App from './App'
import axios from 'axios'

const AppContext = createContext()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' 


function AppProvider({children}) {

    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('b')
    const [cocktails, setCocktails] = useState([])
    // console.log(cocktails)

    async function fetchData() {
        setLoading(true)
        try{
            const data = await axios.get(`${url}${searchTerm}`)
            // console.log(data.data.drinks)
            const drinks = data.data.drinks 
            // console.log(drinks)
            if(drinks) {
                setCocktails(drinks)
            }else {
                setCocktails([])
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [searchTerm])


    const props = { loading, setSearchTerm, cocktails }

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