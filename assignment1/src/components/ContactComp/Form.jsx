import React from 'react'
import FormInput from './FormInput/FormInput'
import FormTextArea from './FormTextarea/FormTextArea'

const Form = () => {

    const inputs = [
        {
            id: 'fname',
            label: 'Name:',
            name: 'first name',
            type: 'text',
            placeHolder: 'First Name'
        },
        {
            id: 'email-address',
            label: 'Email:',
            name: 'email',
            type: 'email',
            placeHolder: 'Email'
        },
    ]

    const textAreaProps = {
        id: 'more-info',
        label: 'Free words:',
        name: 'info',
        placeHolder: 'Do you need to tell us anything?'
    }

    const showInputs = () => {
        return (
            inputs.map(input => (
                <FormInput key={input.id} {...input} />
            ))
        )
    }

    return (
        <form className="contact_section__form" aria-labelledby="contact-header">
            {showInputs()}
            <FormTextArea {...textAreaProps} />
            <button className="form__submit" type="submit">
                Send
            </button>
        </form>
    )
}

export default Form;
