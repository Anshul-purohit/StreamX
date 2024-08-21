// import React from 'react'

// const followedChannels = [
//     {
//         id: 1,
//         username: "anshul",
//         isOnline: true
//     },
//     {
//         id: 2,
//         username: "naruto",
//         isOnline: false
//     },
//     {
//         id: 3,
//         username: "senpai",
//         isOnline: true
//     }
// ]

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-900 text-gray-200 p-4">
//       <span>For you</span>
//       <span>FOLLOWED CHANNELS</span>
//       {followedChannels.map((channel) => (
//         <div id={channel.id}>
//             <span>{channel.username}</span>
//             <span>{channel.isOnline ? 'Online' : 'Offline'}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Sidebar


import React from 'react'

const followedChannels = [
    {
        id: 1,
        username: "anshul",
        isOnline: true
    },
    {
        id: 2,
        username: "naruto",
        isOnline: false
    },
    {
        id: 3,
        username: "senpai",
        isOnline: true
    }
]

const Sidebar = ({ channels }) => {

    if(!channels)
        return null

  return (
    <div className="w-64 bg-gray-900 text-gray-200 p-4">
      <div className="mb-6">
        <span className="text-lg font-semibold block mb-4">For you</span>
        <span className="text-sm text-gray-400 uppercase tracking-wider">Followed Channels</span>
      </div>
      <div className="space-y-4">
        {channels.map((channel) => (
          <div 
            key={channel.id} 
            className="flex items-center justify-between p-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <span className="text-md font-medium">{channel.username}</span>
            <span className={`text-sm ${channel.isOnline ? 'text-green-400' : 'text-red-400'}`}>
              {channel.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
