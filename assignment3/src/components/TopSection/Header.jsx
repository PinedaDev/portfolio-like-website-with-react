import React from 'react'
import ActionBar from './ActionBar/ActionBar'
import Searchfield from './Searchfield/Searchfield'

const Header = () => {
    return (
        <div className='flex justify-between bg-secondary p-3'>
            <Searchfield />
            <ActionBar />
        </div>
    )
}

export default Header