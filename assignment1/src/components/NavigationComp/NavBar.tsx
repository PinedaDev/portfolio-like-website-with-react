import { useState } from 'react'

import NavLinks from './NavLinks/NavLinks'
import MenuBtn from './MenuBtn/MenuBtn'
import DropdownMenu from './DropdownMenu/DropdownMenu'

import './styles/_nav-bar.scss'



const NavBar = () => {

  const linkNames = ['Home', 'Services', 'Blogs', 'Contact']
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = (): void => {
    setMenuState((prevState) => !prevState)
  }

  return (
    <nav className="navigation" aria-label="navigation menu">
      <span className="logo" aria-label="logo">KEYS</span>
      <NavLinks linkNames={linkNames} />
      <MenuBtn type='open' changeMenuState={changeMenuState} />
      <DropdownMenu
        changeMenuState={changeMenuState}
        menuState={menuState}
        linkNames={linkNames} />
    </nav>
  )
}

export default NavBar