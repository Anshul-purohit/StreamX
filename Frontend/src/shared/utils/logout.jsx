const logoutHandler = () => {
    localStorage.removeItem("user")

    window.location.href = "/channels"
}

export default logoutHandler