import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ReactFlvPlayer } from "react-flv-player"
import Chat from './Chat/Chat'
import ChannelDescription from './ChannelDescription'
import useChannelDetails from '../../../shared/hooks/useChannelDetails'
import LoadingSpinner from '../../../shared/components/LoadingSpiner'

export const Stream = ({ streamUrl }) => {
    return(
        <div>
            <ReactFlvPlayer 
                heigth = "100%"
                width = "100%"
                url = {streamUrl}
            />
        </div>
    )
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
            {
                channelDetails.isOnline ? (
                    <Stream 
                        streamUrl={channelDetails.streamUrl}
                    />
                ) : (
                    <div>
                        <span>Channel is offline.</span>
                    </div>
                )
            }
            <ChannelDescription 
                channelId={channelDetails.id}
                title={channelDetails.title}
                description={channelDetails.description}
                username={channelDetails.username}
                getChannels={getChannels}
            />
        </div>
        <Chat channelId={channelDetails.id}/>
    </div>
  )
}

export default ChannelVIew