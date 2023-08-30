import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail'

export default function CocktailList() {

    const { loading, cocktails } = useGlobalContext()
    // console.log(cocktails)

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
        <section>
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>cocktails</h2>
            <div className='cocktails_container'>
                {
                    cocktails.map((item) => {
                        return (
                            <Cocktail key={item.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}