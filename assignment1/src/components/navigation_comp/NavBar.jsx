import React from 'react'
import NavLinks from './NavLinks'

import './styles/_navigation.scss'

const NavBar = () => {
    return (
        <nav className="navigation" aria-label="navigation menu">
            <span className="logo" aria-label="logo">KEYS</span>
            <NavLinks />
        </nav>
    )
}

export default NavBar