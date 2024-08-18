import React from 'react'

const ChannelDescription = ({ username, title, description }) => {
  return (
    <div>
        <span>{username}</span>
        <span>{title}</span>
        <div>
            <span>{description}</span>
        </div>
    </div>
  )
}

export default ChannelDescription