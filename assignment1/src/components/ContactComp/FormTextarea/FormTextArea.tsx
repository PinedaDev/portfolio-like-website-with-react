import { useState } from 'react'

type FormTextAreaProps = {
  id: string,
  label: string,
  name: string,
  placeHolder: string;
}

const FormTextArea = ({ id, label, name, placeHolder }: FormTextAreaProps) => {

  const [input, setInput] = useState('');

  const inputHandler = (event: React.FormEvent<HTMLTextAreaElement>) =>
    setInput(event.currentTarget.value)

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
        cols={30}
        rows={10}
        onChange={e => inputHandler(e)}></textarea>
    </>
  )
}

const styles = { display: 'block' }

export default FormTextArea