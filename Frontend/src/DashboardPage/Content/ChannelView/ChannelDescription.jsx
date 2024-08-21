import React from 'react'
import useUserDetails from '../../../shared/hooks/useUserDetails'
import useFollowChannel from '../../../shared/hooks/useFollowChannel'

const FollowButton = ({ channelId, getChannels }) => {

    const { followChannel } = useFollowChannel()

    const handleFollowChannel = () => {
        followChannel(channelId, getChannels)
    }

    return <button onClick={handleFollowChannel}>Follow</button>
}

const ChannelDescription = ({ username, title, description, channelId, getChannels }) => {

    const { isLogged } = useUserDetails()

  return (
    <div>
        <span>{username}</span>
        <span>
            {isLogged && <FollowButton channelId={channelId} getChannels={getChannels}/>}
        </span>
        <span>{title}</span>
        <div>
            <span>{description}</span>
        </div>
    </div>
  )
}

export default ChannelDescription