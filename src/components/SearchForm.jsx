import React from 'react'
import { useGlobalContext } from '../context'


export default function SearchForm() {

    const { setSearchTerm } = useGlobalContext()

    return (
        <div>
            Type here: 
            <input type='text' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    )
}