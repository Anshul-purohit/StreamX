import React from 'react'
import ChannelCard from './ChannelCard'
import { useNavigate } from 'react-router-dom'

const dummyChannels = [
    {
        id: 1,
        title: "dota",
        avatarUrl: null,
        username: "anshul",
        isOnline: false
    },
    {
        id: 2,
        title: "pubg",
        avatarUrl: null,
        username: "naruto",
        isOnline: true
    },
    {
        id: 3,
        title: "cod",
        avatarUrl: null,
        username: "senpai",
        isOnline: false
    },
    {
        id: 4,
        title: "tekken",
        avatarUrl: null,
        username: "uzumaki",
        isOnline: true
    }
]

const Channels = ({ channels }) => {
    
    const navigate = useNavigate()

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`)
    }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {channels.map((c) => (
                <ChannelCard  
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    username={c.username}
                    isOnline={c.isOnline}
                    avatarUrl={c.avatarUrl}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </div>
    </div>
  )
}

export default Channels
