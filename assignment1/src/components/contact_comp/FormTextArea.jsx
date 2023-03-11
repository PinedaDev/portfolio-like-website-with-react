import { useState } from 'react'
import PropTypes from 'prop-types'

const FormTextArea = ({ id, label, name, placeHolder }) => {

    const [input, setInput] = useState('');

    const inputHandler = (event) => setInput(event.target.value)

    return (
        <>
            <label className="form__label" htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className="form__text_area"
                placeholder={placeHolder}
                style={styles}
                name={name}
                value={input}
                cols=" 30"
                rows="10"
                onChange={e => inputHandler(e)}></textarea>
        </>
    )
}

const styles = { display: 'block' }

FormTextArea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeHolder: PropTypes.string
}

export default FormTextArea