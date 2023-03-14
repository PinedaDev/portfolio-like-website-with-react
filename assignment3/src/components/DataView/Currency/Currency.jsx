import React from 'react'
import PropTypes from 'prop-types'

const Currency = ({ value }) => {
    return (
        <span className='font-semibold text-accent text-2xl'>
            {value} €
        </span>
    )
}

export default Currency

Currency.propTypes = {
    value: PropTypes.number
}