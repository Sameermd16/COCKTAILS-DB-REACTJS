import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'


export default function SearchForm() {

    const { setSearchTerm } = useGlobalContext()
    const search_ref = useRef()

    useEffect(() => {
        search_ref.current.focus()
    }, [])

    function handleChange(e) {
        e.preventDefault()
    }

    return (
        <section className='search_box'>
            <div className='search_box_input'>
                <form onSubmit={handleChange}>
                    <label htmlFor='search_input'>search your favourite cocktail</label> <br />
                    <input id='search_input' ref={search_ref} type='text' onChange={(e) => setSearchTerm(e.target.value)} />
                </form>
            </div>
        </section>
    )
}