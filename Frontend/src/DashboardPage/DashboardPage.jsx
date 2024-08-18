import React from 'react'
import Nav from "./Nav/Nav"
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default DashboardPage
