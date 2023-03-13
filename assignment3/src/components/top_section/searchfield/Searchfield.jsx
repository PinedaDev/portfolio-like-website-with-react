import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'

const Searchfield = () => {

    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='search-field'>
            <input placeholder='looking for someone ?'
                value={searchValue} type="search"
                onChange={(e) => searchHandler(e)} />
            {searchValue === "" &&
                <Icon
                    path={mdiMagnify}
                    color="#234691"
                    size={1}>
                </Icon>}
        </div>
    )
}

export default Searchfield