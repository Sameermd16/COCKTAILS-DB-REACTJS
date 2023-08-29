import React from 'react'
import { useGlobalContext } from '../context'

export default function CocktailList() {

    const { loading, cocktails } = useGlobalContext()
    console.log(cocktails)

    if(loading) {
        return <h1 style={{textAlign: 'center', margin: '40px'}}>LOADING...</h1>
    }

    //empty array [] is truthy 
    if(cocktails.length < 1) {
        return (
            <h1>there are no cocktails matching</h1>
        )
    }

    return (
        <div>
            {
                cocktails.map((item) => {
                    const { strDrinkThumb } = item
                    return (
                        <img src={strDrinkThumb} width='300px' />
                    )
                })
            }
        </div>
    )
}