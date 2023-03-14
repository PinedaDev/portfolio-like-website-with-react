import React from 'react';
import PropTypes from 'prop-types'

import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const UserName = ({ name }) => {
    return (
        <>
            <div className='flex items-center text-accent'>
                <Icon
                    className='mt-auto mb-auto'
                    path={mdiAccount}
                    size={2}
                />
                <span className='text-2xl'>
                    {name}
                </span>
            </div>
        </>
    )
}

export default UserName

UserName.propTypes = {
    name: PropTypes.string,
}