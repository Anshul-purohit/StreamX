import React, { useState } from 'react'
import { usernameValidationMessage, validateUsername } from '../../../shared/validators/validateUsername'
import { titleValidationMessage, validateTitle } from '../../../shared/validators/validateTitle'
import { avatarUrlValidationMessage, validateAvatarUrl } from '../../../shared/validators/validateAvatarUrl'
import { descriptionValidationMessage, validateDescription } from '../../../shared/validators/validateDescription'
import Input from '../../../shared/components/Input'

const inputs = [
    {
        field: "username",
        label: "Username",
        validationMessage: usernameValidationMessage,
        type: "text"
    },
    {
        field: "title",
        label: "Title",
        validationMessage: titleValidationMessage,
        type: "text"
    },
    {
        field: "avatarUrl",
        label: "Avatar URL",
        validationMessage: avatarUrlValidationMessage,
        type: "text"
    },
    {
        field: "description",
        label: "Description",
        validationMessage: descriptionValidationMessage,
        type: "text",
        textarea: true
    },
]

const ChannelSettings = ({ settings,saveSettings }) => {

    const [formState, setFormState] = useState({
        title: {
            isValid: validateTitle(settings.title),
            showError: false,
            value: settings.title
        },
        username: {
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        avatarUrl: {
            isValid: validateAvatarUrl(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        },
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
        let isValid = false

        switch (field) {
            case "username":
                isValid = validateUsername(value)
                break
            case "avatarUrl":
                isValid = validateAvatarUrl(value)
                break
            case "title":
                isValid = validateTitle(value)
                break
            case "description":
                isValid = validateDescription(value)
                break
            default:
                break
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            description: formState.description.value,
            avatarUrl: formState.avatarUrl.value
        })
    }

    const isButtonSubmitDisabled = 
        !formState.username.isValid ||
        !formState.title.isValid ||
        !formState.avatarUrl.isValid ||
        !formState.description.isValid 

  return (
    <form className="space-y-6">
        {inputs.map((input) => (
            <Input 
                key={input.field}
                field={input.field}
                label={input.label}
                value={formState[input.field].value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState[input.field].showError}
                validationMessage={input.validationMessage}
                type={input.type}
                textarea={input.textarea}
            />
        ))}
        <button
            className={`w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md 
                       hover:bg-purple-700 transition-colors ${isButtonSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleFormSubmit}
            disabled={isButtonSubmitDisabled}
        >
            Save Changes
        </button>
    </form>
  )
}

export default ChannelSettings
