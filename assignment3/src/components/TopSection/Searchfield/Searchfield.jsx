import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

const Searchfield = () => {

    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='relative'>
            <input value={searchValue} type="search"
                onChange={(e) => searchHandler(e)}
                className=' p-2 rounded text-center font-semibold text-third bg-main' />
            {searchValue === "" &&
                <Icon
                    className='absolute top-1/2 left-[85%] -translate-y-1/2 text-accent'
                    path={mdiMagnify}
                    size={1}>
                </Icon>}
        </div>
    )
}

export default Searchfield