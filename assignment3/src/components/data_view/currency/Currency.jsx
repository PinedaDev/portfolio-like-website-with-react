import React from 'react'

const Currency = ({ value }) => {
    return (
        <span className='font-semibold text-accent text-2xl'>
            {value} €
        </span>
    )
}

export default Currency