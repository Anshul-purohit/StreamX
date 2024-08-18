// import React from 'react'

// const Register = ({ switchAuthHandler }) => {
//   return (
//     <div 
//       className="bg-gray-800 p-8 rounded-md shadow-lg max-w-md w-full text-white text-center 
//                  cursor-pointer hover:bg-gray-700 transition-colors"
//       onClick={switchAuthHandler}
//     >
//       Register
//     </div>
//   )
// }

// export default Register



import React, { useState } from 'react'
import Logo from './Logo'
import AuthInput  from '../shared/components/Input'
import { emailValidationMessage, validateEmail } from '../shared/validators/validateEmail'
import { passwordValidationMessage, validatePassword } from '../shared/validators/validatePassword'
import { usernameValidationMessage, validateUsername } from '../shared/validators/validateUsername'
import { passwordConfValidationMessage, validatePasswordConf } from '../shared/validators/validatePasswordConf'
import useRegister from '../shared/hooks/useRegister'

const Register = ({ switchAuthHandler }) => {

    const { register, isLoading } = useRegister()

    const [formState,setFormState] = useState({
        username: {
            value: "",
            isValid: false,
            showError: false
        },
        email: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        },
        passwordConf: {
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
            case "username":
                isValid = validateUsername(value)
                break;
            case "passwordConf":
                isValid = validatePasswordConf(formState.password.value,value)
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

    const handleRegister = (event) => {
        event.preventDefault();

        register(formState.username.value,formState.email.value,formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid || !formState.username.isValid || formState.password.value !== formState.passwordConf.value

    return (
        <div className="bg-gray-800 p-8 rounded-md shadow-lg max-w-md w-full">
            <Logo text={"Sign up to StreamX"}/>
            <form className="space-y-4">
                <AuthInput 
                    type="text"
                    field="username" 
                    label="Username" 
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange} 
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={usernameValidationMessage}
                />
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
                <AuthInput 
                    type="password"
                    field="passwordConf" 
                    label="Password Confirmation" 
                    value={formState.passwordConf.value}
                    onChangeHandler={handleInputValueChange} 
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConf.showError}
                    validationMessage={passwordConfValidationMessage}
                />
                <button
                    className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 
                               transition-colors disabled:bg-gray-700"
                    onClick={handleRegister }
                    disabled={isSubmitButtonDisabled}
                >
                    Register 
                </button>
            </form>
            <span 
                className="block text-sm text-gray-300 mt-4 cursor-pointer hover:underline"
                onClick={switchAuthHandler}
            >
                Alreade have an account? Sign in
            </span>
        </div>
    )
}

export default Register
