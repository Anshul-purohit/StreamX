import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Channels from './Channels/Channels'
import ChannelVIew from './ChannelView/ChannelVIew'
import Settings from './Settings/Settings'

const Content = ({ channels, getChannels }) => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
        <Routes>
            <Route path='settings' element={<Settings />}/>
            <Route path='channels' element={<Channels channels={channels}/>}/>
            <Route path='channel/:id' element={<ChannelVIew getChannels={getChannels}/>}/>
        </Routes>
    </div>
  )
}

export default Content
