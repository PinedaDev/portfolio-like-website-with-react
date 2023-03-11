import React, { useState } from 'react'
import NavLinks from '../../components/navigation_comp/nav_links/NavLinks'
import MenuBtn from '../../components/navigation_comp/menu_btn/MenuBtn'

import './styles/_nav-bar.scss'
import DropdownMenu from '../../components/navigation_comp/dropdown_menu/DropdownMenu'

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
            <MenuBtn changeMenuState={changeMenuState} />
            <DropdownMenu changeMenuState={changeMenuState}
                linkNames={linkNames}
                menuState={menuState} />
        </nav>
    )
}

export default NavBar