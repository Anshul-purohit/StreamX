import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Channels from './Channels/Channels'

const Content = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
        <Routes>
            <Route path='setting' element={<div>setting</div>}/>
            <Route path='channels' element={<Channels />}/>
            <Route path='channel/:id' element={<div>id</div>}/>
        </Routes>
    </div>
  )
}

export default Content
