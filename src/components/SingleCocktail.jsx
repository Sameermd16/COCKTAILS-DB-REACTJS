import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import axios from 'axios'

// const url = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i='  

export default function SingleCocktail() {
    const { loading, setLoading } = useGlobalContext()
    const [oneCocktail, setOneCocktail] = useState(null)
    console.log(oneCocktail)
    const { id } = useParams()

    useEffect(() => {
        getSingleCocktail()
    }, [id])

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
            } else {
                setOneCocktail(null)
            }
        } catch(error) {
            console.log(error)
        }
        setLoading(false)
    }

    if(loading) {
        return <h1 style={{textAlign: 'center', margin: '40px'}}>LOADING...</h1>
    }
    
    if(!oneCocktail) {
        return <h2>no cocktail to display</h2>
    } else {
        const { name, image, info, category, glass, instructions, ingredients } = oneCocktail

        return (
            <section style={{}}> 
                <div style={{width: '70%', margin: 'auto'}}>
                    <Link to='/' >back home</Link>
                    <h2 style={{textAlign: 'center'}}> {name} </h2>
                    <div>
                        <img src={image} alt={name} width='350px' />
                        <div className='drink-info'>
                            <p>
                                <span>name: </span> {name}
                            </p>
                            <p>
                                <span>category: </span> {category}
                            </p>
                            <p>
                                <span>info: </span> {info}
                            </p>
                            <p>
                                <span>glass: </span> {glass}
                            </p>
                            <p>
                                <span>instructions: </span> {instructions}
                            </p>
                            <p>
                                <span>ingredients: </span> {
                                    ingredients.map((item, index) => {
                                        return item? <span key={index}> {item} </span> : null
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }



    // return (
    //     <div> 
    //         {/* <p> {name} </p>
    //         <img src={image} alt="" /> */}
    //         single component
    //     </div>
    // )
}