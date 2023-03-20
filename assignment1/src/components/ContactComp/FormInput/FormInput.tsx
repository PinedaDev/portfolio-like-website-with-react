import React, { useState } from 'react'
import PropTypes, { string } from 'prop-types'

type FormInputProps = {
  id: string,
  label: string,
  name: string,
  type: string,
  placeHolder: string;
}

const FormInput = ({ id, label, name, type, placeHolder }: FormInputProps) => {

  const [input, setInput] = useState('');

  const inputHandler = (event: React.FormEvent<HTMLInputElement>) =>
    setInput(event.currentTarget.value)

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