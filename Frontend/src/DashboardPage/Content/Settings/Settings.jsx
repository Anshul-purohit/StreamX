import React from 'react'
import StreamKey from './StreamKey'
import ChannelSettings from './ChannelSettings'
import PasswordSettings from './PasswordSettings'

const channelSettings = {
    title: "title",
    description: "description",
    avatarUrl: null,
    username: "anshul",
    streamKey: "1234"
}

const Settings = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">Settings</h2>
        <ChannelSettings settings={channelSettings} />
        <PasswordSettings />
        <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  )
}

export default Settings
