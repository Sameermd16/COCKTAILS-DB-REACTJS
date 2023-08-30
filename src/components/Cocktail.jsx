import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
// import SingleCocktail from './SingleCocktail'


export default function Cocktail() {

    const { cocktails } = useGlobalContext()
    // console.log(cocktails)

    return (
           cocktails.map((item) => {
            const { id, name, glass, info, image } = item
            return (
                <article style={{boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24'}} key={id}>
                    <div>
                        <img src={image} width='300px' />
                    </div>
                    <div style={{padding: '20px'}}>
                        <h3> {name} </h3>
                        <h4 style={{margin: '8px 0'}}> {glass} </h4>
                        <p style={{marginBottom: '8px'}}> {info} </p>
                        <Link to={`/${id}`} className='details_btn' >Details</Link>
                    </div>
                </article>
            )
           })
    )
}