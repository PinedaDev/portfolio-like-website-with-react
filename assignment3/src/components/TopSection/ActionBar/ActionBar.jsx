import React from 'react'

import ActionBtn from '../../Global/ActionBtn/ActionBtn'

import { mdiFilterVariantPlus } from '@mdi/js'
import { mdiAccountPlus } from '@mdi/js'
import { mdiExport } from '@mdi/js'

const ActionBar = () => {

    const actions = [
        {
            name: 'add filter to data view',
            text: 'add filter',
            icon: mdiFilterVariantPlus,
        },
        {
            name: 'create account',
            text: 'create',
            icon: mdiAccountPlus,
        },
        {
            name: 'export data',
            text: 'export',
            icon: mdiExport,
        }
    ]

    const showActions = () => {
        return (
            actions.map(action => (
                <ActionBtn key={action.name} text={action.text} icon={action.icon} />
            ))
        )
    }
    return (
        <div className='flex justify-around font-semibold'>
            {showActions()}
        </div>
    )
}

export default ActionBar