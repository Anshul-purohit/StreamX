import React from 'react'
import Messages from './Messages'
import NewMessageInput from './NewMessageInput'
import useChatHistory from '../../../../shared/hooks/useChatHistory'

const Chat = ({ channelId }) => {

  const { messages, sendMessage } = useChatHistory(channelId)

  return (
    <div>
      <div>
        <span>Stream Chat</span>
      </div>
      <Messages messages={messages}/>
      <NewMessageInput sendMessage={sendMessage}/>
    </div>
  )
}

export default Chat