import React from 'react'
import { useGlobalContext } from '../context'

export default function CocktailList() {

    const { loading } = useGlobalContext()

    if(loading) {
        return <h1 style={{textAlign: 'center', margin: '40px'}}>LOADING...</h1>
    }

    return (
        <div>this is cocktail list component</div>
    )
}