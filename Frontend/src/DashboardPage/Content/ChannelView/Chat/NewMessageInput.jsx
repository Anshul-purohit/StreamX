import React, { useState } from 'react'

const NewMessageInput = ({ sendMessage }) => {

    const [messageContent,setMessageContent] = useState("");

    const handleValueChange = (e) => {
        setMessageContent(e.target.value)
    }

    const handleSendMessage = () => {
        if(messageContent.length>0){
            sendMessage(messageContent)
            setMessageContent("");
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSendMessage()
        }
    }

  return (
    <div>
        <input 
            type="text" 
            placeholder='Type message ...'
            value={messageContent}
            onChange={handleValueChange}
            onKeyDown={handleKeyPress}
        />
    </div>
  )
}

export default NewMessageInput