import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Channels from './Channels/Channels'
import ChannelVIew from './ChannelView/ChannelVIew'
import Settings from './Settings/Settings'

const Content = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
        <Routes>
            <Route path='setting' element={<Settings />}/>
            <Route path='channels' element={<Channels />}/>
            <Route path='channel/:id' element={<ChannelVIew />}/>
        </Routes>
    </div>
  )
}

export default Content
