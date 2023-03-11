import React from 'react'
import PropTypes from 'prop-types';

const NavLinks = ({ linkNames }) => {

    const showLinks = () => {
        return (
            linkNames.map(link => (
                <li key={link} role="none">
                    <a href={link === 'home' ? '' : '#' + link.toLowerCase()}
                        role="menuitem"
                        tabIndex="0"
                        className="navigation__link">{link}</a>
                </li>
            ))
        )

    }

    return (
        <ul className="navigation__links" id="menubar" role="menubar" aria-label="navigation menu">
            {showLinks()}
        </ul>
    )
}

NavLinks.propTypes = {
    linkNames: PropTypes.array,
}

export default NavLinks