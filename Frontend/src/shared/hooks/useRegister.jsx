import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register as registerRequest } from "../../api/api"
import toast from "react-hot-toast"

const useRegister = () => {
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    const register = async (username,email,password) => {
        setIsLoading(true)

        const response = await registerRequest({
            username,
            email,
            password
        })

        setIsLoading(false)

        if(response.error){
            return toast.error(
                response.exception?.response?.data ||  "Error occured while signing up. Please try again."
            )
        }

        const { userDetails } = response.data;

        localStorage.setItem('user',JSON.stringify(userDetails))

        navigate('/channels')
    }

    return{
        register,
        isLoading
    }
}

export default useRegister