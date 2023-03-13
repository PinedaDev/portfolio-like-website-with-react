import React from 'react'
import Icon from '@mdi/react'

const ActionBtn = ({ icon, text }) => {
    return (
        <div>
            <button
                className='flex justify-between border-none 
            bg-main text-xl ml-10 text-accent uppercase
            align-middle p-2 pl-4 rounded duration-300 hover:text-third'>
                {text}
                <Icon
                    className=' ml-2 mr-2 mt-auto mb-auto'
                    path={icon}
                    size={1} />
            </button>
        </div>
    )
}

export default ActionBtn