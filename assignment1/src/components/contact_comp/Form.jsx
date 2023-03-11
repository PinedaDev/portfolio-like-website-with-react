import React from 'react'
import FormInput from './FormInput'

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
        </form>
    )
}

export default Form;
