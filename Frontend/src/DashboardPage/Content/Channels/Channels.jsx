import React from 'react'
import ChannelCard from './ChannelCard'

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

const Channels = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dummyChannels.map((c) => (
                <ChannelCard 
                    key={c.id}
                    title={c.title}
                    username={c.username}
                    isOnline={c.isOnline}
                    avatarUrl={c.avatarUrl}
                    navigateToChannelHandler={() => {}}
                />
            ))}
        </div>
    </div>
  )
}

export default Channels
