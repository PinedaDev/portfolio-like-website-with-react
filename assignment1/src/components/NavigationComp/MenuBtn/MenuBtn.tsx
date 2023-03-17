import React from 'react'
import PropTypes from 'prop-types'

const MenuBtn = ({ changeMenuState, type }) => {
    return (
        <button onClick={changeMenuState} className='navigation__btn'>
            <i className={type === 'open' ? 'fa fa-bars' : 'fa fa-close'}></i>
        </button>
    )
}

MenuBtn.propTypes = {
    changeMenuState: PropTypes.func,
    type: PropTypes.string
}

export default MenuBtn