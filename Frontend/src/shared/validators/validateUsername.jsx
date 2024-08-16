export const validateUsername = (username) => {
    const regex = /^\S{3,12}$/;

    return regex.test(username)
}

export const usernameValidationMessage = "Username should have between 3 and 12 characters. No spaces are allowed."