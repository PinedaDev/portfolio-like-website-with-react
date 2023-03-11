import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ id, label, name, type, placeHolder }) => {

    const [input, setInput] = useState('');

    const inputHandler = (event) => setInput(event.target.value)

    return (
        <>
            <label className="form__label" htmlFor={id}>{label}</label><br />
            <input className="form__input"
                placeholder={placeHolder}
                type={type} name={name}
                id={id}
                value={input}
                onChange={e => inputHandler(e)}
                required
            /> <br />
        </>
    )
}


FormInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeHolder: PropTypes.string
}
export default FormInput