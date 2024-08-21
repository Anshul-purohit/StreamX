import React, { useEffect } from 'react'
import Chat from './Chat/Chat'
import ChannelDescription from './ChannelDescription'
import useChannelDetails from '../../../shared/hooks/useChannelDetails'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../../shared/components/LoadingSpiner'

const channelDetails = {
    id: 1,
    title: "Gaming Channel",
    description: "Playing some RPG",
    username: "anshul",
    isOnline: false
}

const ChannelVIew = ({ getChannels }) => {

    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails()

    const { id } = useParams()

    useEffect(() => {
        getChannelDetails(id)
    },[])

    if(isFetching)
        return <LoadingSpinner />


    console.log("X : ",channelDetails)

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
                getChannels={getChannels}
            />
        </div>
        <Chat />
    </div>
  )
}

export default ChannelVIew