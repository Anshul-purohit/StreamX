import React, { useState } from 'react'
import { passwordValidationMessage, validatePassword } from '../../../shared/validators/validatePassword'
import { passwordConfValidationMessage } from '../../../shared/validators/validatePasswordConf'
import Input from '../../../shared/components/Input'

const inputs = [
    {
        field: "password",
        label: "Current password",
        validationMessage: passwordValidationMessage,
        type: "password"
    },
    {
        field: "newPassword",
        label: "New password",
        validationMessage: passwordConfValidationMessage,
        type: "password"
    } 
]

const PasswordSettings = () => {

    const [formState, setFormState] = useState({
        password: {
            isValid: false,
            showError: false,
            value: ""
        },
        newPassword: {
            isValid: false,
            showError: false,
            value: ""
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = validatePassword(value)

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }))
    }

    const isSubmitButtonDisabled = !formState.password.isValid || !formState.newPassword.isValid

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form className="space-y-6 mt-8">
        {inputs.map((input) => (
            <Input 
                key={input.field}
                field={input.field}
                label={input.label}
                value={formState[input.field].value}
                onBlurHandler={handleInputValidationOnBlur}
                onChangeHandler={handleInputValueChange}
                showErrorMessage={formState[input.field].showError}
                validationMessage={input.validationMessage}
                type={input.type}
            />
        ))}
        <button
            onClick={handleFormSubmit}
            disabled={isSubmitButtonDisabled}
            className={`w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md 
                        hover:bg-purple-700 transition-colors ${isSubmitButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            Save Changes
        </button>
    </form>
  )
}

export default PasswordSettings
