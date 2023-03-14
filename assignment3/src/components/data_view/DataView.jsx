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
        },
        {
            id: 1231245,
            name: 'Ernesto Chavez',
            lastSeen: '30.02.2007',
            orders: 5,
            spent: 3445.213,
            lastPurchase: '29.02.2007'
        },
        {
            id: 43563,
            name: 'Juan Gamacho',
            lastSeen: '12.06.2004',
            orders: 1,
            spent: 234,
            lastPurchase: '12.03.2003'
        },
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