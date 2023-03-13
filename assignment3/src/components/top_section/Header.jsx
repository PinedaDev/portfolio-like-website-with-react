import React from 'react'
import ActionBar from './action_bar/ActionBar'
import Searchfield from './searchfield/Searchfield'

const Header = () => {
    return (
        <div className='flex justify-between bg-secondary p-3'>
            <Searchfield />
            <ActionBar />
        </div>
    )
}

export default Header