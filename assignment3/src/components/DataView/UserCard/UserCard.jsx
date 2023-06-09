import React from 'react'
import PropTypes from 'prop-types'

import CheckBox from '../../global/Checkbox/CheckBox'
import UserName from '../UserName/UserName'
import Currency from '../Currency/Currency'

const UserCard = ({ name, lastSeen, orders, spent, lastPurchase }) => {

    return (
        <div className='grid grid-cols-[1fr_repeat(5,_2fr)] 
        p-3 list-none border-t-2 border-b-2 border-secondary
        text-third place-items-center'>
            <CheckBox />
            <UserName name={name} />
            <span>{lastSeen}</span>
            <span>{orders}</span>
            <Currency value={spent} />
            <span>{lastPurchase}</span>
        </div>
    )
}

export default UserCard

UserCard.propTypes = {
    name: PropTypes.string,
    lastSeen: PropTypes.string,
    orders: PropTypes.number,
    spent: PropTypes.number,
    lastPurchase: PropTypes.string,
}