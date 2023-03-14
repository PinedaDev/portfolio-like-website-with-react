import React from 'react'
import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js'
import './checkbox.css'

const CheckBox = () => {
    return (
        <label className="container">
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    )
}

export default CheckBox