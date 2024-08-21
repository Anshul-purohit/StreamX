import { changePassword as changePasswordRequest } from "../../api/api"
import toast from "react-hot-toast"

const useChangePassword = () => {
  const changePassword = async (password,newPassword) => {
    const responseData = await changePasswordRequest({
        password,
        newPassword
    })

    if(responseData.error){
        return toast.error(responseData.exception?.response?.data || "Error ocurred when fetching channel settings")
    }

    toast.success("Password changed successfully")
  }

  return {
    changePassword
  }
}

export default useChangePassword