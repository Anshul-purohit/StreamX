import React from 'react'

const imageUrl = "https://cdn.pixabay.com/photo/2024/04/29/10/26/gaming-8727521_640.jpg"

const ChannelAvatar = ({ url }) => {
    return (
        <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <img 
                className="w-full h-full object-cover" 
                src={url || imageUrl} 
                alt="Channel Avatar"
            />
        </div>
    )
}

const ChannelCard = ({
    title,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {

    const handleNavigate = () => {
        navigateToChannelHandler()
    }

    return (
        <div 
            onClick={handleNavigate} 
            className="bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-colors"
        >
            <ChannelAvatar url={avatarUrl} />
            <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
                <p className="text-md text-gray-400">{username}</p>
                <p className={`text-sm ${isOnline ? 'text-green-400' : 'text-red-400'} mt-2`}>
                    {isOnline ? "Online" : "Offline"}
                </p>
            </div>
        </div>
    )
}

export default ChannelCard
