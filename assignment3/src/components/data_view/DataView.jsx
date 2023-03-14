import React from 'react'
import TableHeader from './table_header/TableHeader'
import UserCard from './user_card/UserCard'

const DataView = () => {
    const customers = [
        {
            id: 1136162,
            name: 'Pedro Casablanca',
            lastSeen: '29.04.2002',
            orders: 2,
            spent: 122.213,
            lastPurchase: '12.02.2002'
        }
    ]

    const showCustomers = () => (
        customers.map(customer => (
            <UserCard key={customer.id} {...customer} />
        ))
    )
    return (
        <div>
            <TableHeader />
            {showCustomers()}
        </div>
    )
}

export default DataView