import React from 'react'

const DropdownMenu = ({ linkNames, changeMenuState, menuState }) => {

    const showDropdownLinks = () => (
        linkNames.map(link => (
            <li onClick={changeMenuState} key={link} role="none">
                <a href={link === 'home' ? '' : '#' + link.toLowerCase()}
                    role="menuitem"
                    tabIndex="0"
                    className="dropdown__link">{link}</a>
            </li>
        ))
    )

    return (
        <div className={`navigation__dropdown ${!menuState ? 'hidden' : 'visible'}`}>
            <ul className='dropdown__links'>
                {showDropdownLinks()}
            </ul>
        </div>
    )
}

export default DropdownMenu