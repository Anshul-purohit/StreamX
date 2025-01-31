export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

export const passwordValidationMessage = "Password should have between 6 to 12 character. No spaces are allowed."