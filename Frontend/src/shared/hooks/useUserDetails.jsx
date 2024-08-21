import { useState } from "react"
import logoutHandler from "../utils/logout.jsx";

const getUserDetails = () => {
    const userDetails = localStorage.getItem('user')

    if(userDetails){
        return JSON.parse(userDetails)
    }

    return null
}

const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(getUserDetails())

    const logout = () => {
        logoutHandler()
    }

    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : "Guest",
        logout,
    }
}

export default useUserDetails