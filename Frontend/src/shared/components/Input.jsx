import React from 'react'

const AuthInput = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea
}) => {

    const handleValueChange = (e) => {
        onChangeHandler(e.target.value,field)
    }

    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value,field)
    }

    return (
        <div className="mb-4">
            <div>
                <span className="block text-sm font-medium text-gray-300 mb-2">{label}</span>
            </div>
            <div>
                {textarea ? (
                    <textarea 
                        className={`w-full px-4 py-2 rounded-md bg-gray-900 text-gray-100 border-2 
                            focus:border-purple-500 focus:outline-none transition-colors 
                            ${showErrorMessage ? 'border-red-500' : 'border-gray-700'}`}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                    />
                ) : (
                    <input 
                        className={`w-full px-4 py-2 rounded-md bg-gray-900 text-gray-100 border-2 
                                focus:border-purple-500 focus:outline-none transition-colors 
                                ${showErrorMessage ? 'border-red-500' : 'border-gray-700'}`}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                )}
                <span className="text-xs text-red-500 mt-1">
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </div>
    )
}

export default AuthInput
