import React, { useState } from 'react'

import NavLinks from '../../components/NavigationComp/NavLinks/NavLinks'
import MenuBtn from '../../components/NavigationComp/MenuBtn/MenuBtn'
import DropdownMenu from '../../components/NavigationComp/DropdownMenu/DropdownMenu'

import './styles/_nav-bar.scss'

const NavBar = () => {

    const linkNames = ['Home', 'Services', 'Blogs', 'Contact']
    const [menuState, setMenuState] = useState(false);

    const changeMenuState = () => {
        setMenuState(!menuState)
    }


    return (
        <nav className="navigation" aria-label="navigation menu">
            <span className="logo" aria-label="logo">KEYS</span>
            <NavLinks linkNames={linkNames} />
            <MenuBtn type='open' changeMenuState={changeMenuState} />
            <DropdownMenu changeMenuState={changeMenuState}
                linkNames={linkNames}
                menuState={menuState} />
        </nav>
    )
}

export default NavBar