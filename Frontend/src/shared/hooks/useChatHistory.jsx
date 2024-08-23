import { useEffect } from "react"
import { closeChatSubscription, getChatHistory, sendChatMessage } from "../../socketConn/socketConn"
import useUserDetails from "./useUserDetails"
import useStore from "../../store/store"

const useChatHistory = (channelId) => {

    const { chatHistory } = useStore()
    const { isLogged, username } = useUserDetails()

    useEffect(() => {
        getChatHistory(channelId)

        return () => {
            closeChatSubscription(channelId)
        }
    },[])

    const sendMessage = (message) => {
        sendChatMessage(channelId, {
            author: isLogged ? username : "Guest",
            content: message
        })
    }

    return {
        messages: chatHistory?.channelId === channelId ? chatHistory.messages : [],
        sendMessage
    }
}

export default useChatHistory