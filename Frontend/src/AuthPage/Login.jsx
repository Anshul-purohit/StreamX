import React, { useState } from 'react'
import Logo from './Logo'
import AuthInput  from '../shared/components/Input'
import { emailValidationMessage, validateEmail } from '../shared/validators/validateEmail'
import { passwordValidationMessage, validatePassword } from '../shared/validators/validatePassword'
// import { login } from '../api/api'
import useLogin from '../shared/hooks/useLogin'

const Login = ({ switchAuthHandler }) => {

    const {login, isLoading} = useLogin()

    const [formState,setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        }
    })

    const handleInputValueChange = (value,field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value,field) => {
        let isValid = false

        switch (field) {
            case "email":
                isValid = validateEmail(value)
                break;
            case "password":
                isValid = validatePassword(value)
                break;
            default:
                break;
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

    const handleLogin = (event) => {
        event.preventDefault()

        login(formState.email.value,formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid

    return (
        <div className="bg-gray-800 p-8 rounded-md shadow-lg max-w-md w-full">
            <Logo text={"Log in to StreamX"}/>
            <form className="space-y-4">
                <AuthInput 
                    type="text"
                    field="email" 
                    label="Email" 
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange} 
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <AuthInput 
                    type="password"
                    field="password" 
                    label="Password" 
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange} 
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <button
                    className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 
                               transition-colors disabled:bg-gray-700"
                    onClick={handleLogin}
                    disabled={isSubmitButtonDisabled}
                >
                    Log in 
                </button>
            </form>
            <span 
                className="block text-sm text-gray-300 mt-4 cursor-pointer hover:underline"
                onClick={switchAuthHandler}
            >
                Don't have an account? Sign up
            </span>
        </div>
    )
}

export default Login
