import { useState } from "react"
import { getChannelDetails as getChannelDetailsRequest } from "../../api/api"
import toast from "react-hot-toast"

const useChannelDetails = () => {

    const [channelDetails, setChannelDetails] = useState(null)

    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id)

        if(responseData.error){
            return toast.error(responseData.exception?.response?.data || "Error ocurred when fetching channel details")
        }
        console.log("Z : ",responseData.data)
        setChannelDetails(responseData.data)
    } 

    console.log("Y : ",channelDetails)

    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails,
    }

}

export default useChannelDetails