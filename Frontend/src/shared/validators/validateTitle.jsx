export const validateTitle = (title) => {
    return title.length>=3 && title.length<=30
}

export const titleValidationMessage = "Title should have between 3 to 30 characters."