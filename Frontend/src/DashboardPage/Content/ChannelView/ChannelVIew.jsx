import React from 'react'
import Chat from './Chat/Chat'
import ChannelDescription from './ChannelDescription'

const channelDetails = {
    id: 1,
    title: "Gaming Channel",
    description: "Playing some RPG",
    username: "anshul",
    isOnline: false
}

const ChannelVIew = () => {
  return (
    <div>
        <div>
            <div>
                <span>Channel is offline.</span>
            </div>
            <ChannelDescription 
                channelId={channelDetails.id}
                title={channelDetails.title}
                description={channelDetails.description}
                username={channelDetails.username}
            />
        </div>
        <Chat />
    </div>
  )
}

export default ChannelVIew