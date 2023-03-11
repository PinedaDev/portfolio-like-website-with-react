import React from 'react'
import PropTypes from 'prop-types';

import MenuBtn from '../menu_btn/MenuBtn'

const DropdownMenu = ({ linkNames, changeMenuState, menuState }) => {

    const showDropdownLinks = () => (
        linkNames.map(link => (
            <li onClick={changeMenuState} key={link} role="none">
                <a href={link === 'home' ? '' : '#' + link.toLowerCase()}
                    role="menuitem"
                    tabIndex="0"
                    className="dropdown__link">{link}
                </a>
            </li>
        ))
    )

    return (
        <div className={`navigation__dropdown ${!menuState ? 'hidden' : 'visible'}`}>
            <MenuBtn type='close' changeMenuState={changeMenuState} />
            <ul className='dropdown__links'>
                {showDropdownLinks()}
            </ul>
        </div>
    )
}

DropdownMenu.propTypes = {
    linkNames: PropTypes.array,
    changeMenuState: PropTypes.func,
    menuState: PropTypes.bool
}

export default DropdownMenu