import React from 'react'
import NavLinks from './NavLinks'

import './styles/_nav-bar.scss'

const NavBar = () => {
    return (
        <nav className="navigation" aria-label="navigation menu">
            <span className="logo" aria-label="logo">KEYS</span>
            <NavLinks linkNames={['Home', 'Services', 'Blogs', 'Contact']} />
        </nav>
    )
}

export default NavBar