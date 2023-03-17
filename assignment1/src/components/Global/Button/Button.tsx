import React from 'react'
import PropTypes from 'prop-types';

// import './style/_button.scss'

const Button = ({ text, link }) => {
    link ? link : link = '#';

    return (
        <a href={link} className='btn' id="srv1-btn" aria-labelledby="service1 srv1-btn">
            {text}
        </a>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
}

export default Button