import React from 'react'
import CheckBox from '../../global/checkbox/CheckBox'
import TableCategory from './table_category/TableCategory'

const TableHeader = () => {
    const categories = [
        'Customer',
        'Last seen',
        'Orders',
        'Total spent',
        'Last purchase'
    ]

    const showCategory = () => (
        categories.map((category, index) => (
            <TableCategory key={index} text={category} />
        ))
    )
    return (
        <div className='grid grid-cols-[1fr_repeat(5,_2fr)] p-3'>
            <CheckBox />
            {showCategory()}
        </div>
    )
}

export default TableHeader