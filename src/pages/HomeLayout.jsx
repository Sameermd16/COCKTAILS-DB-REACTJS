import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <>
            <nav>
                <Link to='/' >
                    #LOGO
                </Link>
                <ul>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}