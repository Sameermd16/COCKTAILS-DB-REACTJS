import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import axios from 'axios'

const url = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' 

export default function SingleCocktail() {
    const { loading, setLoading } = useGlobalContext()
    const [oneCocktail, setOneCocktail] = useState(null)
    console.log(oneCocktail)

    const { id } = useParams()

    async function getSingleCocktail() {
        setLoading(true)
        try {
            const singleCocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            // console.log(singleCocktail.data.drinks[0])
            const _cocktail = singleCocktail.data.drinks[0]
            console.log(_cocktail)
            if(_cocktail) {
                const { 
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = _cocktail
                // console.log(name)
                //this is same as 
                // const {strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strIngredient1} = _cocktail

                // if this is an object with an item but _cocktail is object itself 
                // const newCocktail = _cocktail.map((item) => {
                //     return (
                //         {
                //             name: strDrink,
                //             glass: strDrink,
                //             info: strAlcoholic
                //         }
                //     )
                // })
                const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
                
                const newCocktail = {
                    name,
                    image, 
                    info, 
                    category,
                    glass,
                    instructions,
                    ingredients
                }
                setOneCocktail(newCocktail)
            }else {
                setOneCocktail(null)
            }
        } catch(error) {
            console.log(error)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        getSingleCocktail()
    }, [id])

    return (
        <div> 
               
        </div>
    )
}