import React from 'react'
import PropTypes from 'prop-types';

import './style/_button.scss'

const Button = ({ text }) => {
    return (
        <button className='btn' id="srv1-btn" aria-labelledby="service1 srv1-btn">
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button