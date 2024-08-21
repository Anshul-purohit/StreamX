import { useEffect, useState } from "react"
import { getChannelSettings, updateChannelSettings } from "../../api/api"
import toast from "react-hot-toast"

const useChannelSettings = () => {
    const [channelSettings,setChannelSettings] = useState(null)

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings()
        console.log(response.data)
        if(response.error){
            return toast.error(response.exception?.response?.data || "Error ocurred when fetching channel settings")
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey
        })
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data) 
        console.log(response.data)
        if(response.error){
            return toast.error(response.exception?.response?.data || "Error ocurred when saving channel details")
        }

        toast.success("Channel settings saved successfully")
    }

    useEffect(() => {
        fetchChannelSettings()
    }, [])

    return{
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    }
}

export default useChannelSettings