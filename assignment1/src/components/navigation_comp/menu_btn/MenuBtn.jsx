import React from 'react'

const MenuBtn = ({ changeMenuState }) => {
    return (
        <button onClick={changeMenuState} className='navigation__btn'>
            <i className="fa fa-bars"></i>
        </button>
    )
}

export default MenuBtn