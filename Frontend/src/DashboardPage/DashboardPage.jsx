import React, { useEffect } from 'react'
import Nav from "./Nav/Nav"
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'
import useChannels from '../shared/hooks/useChannels'
import useUserDetails from '../shared/hooks/useUserDetails'
import LoadingSpinner from '../shared/components/LoadingSpiner'

const DashboardPage = () => {

  const { getChannels, isFetching, allChannels, followedChannels } = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  },[])

  if(isFetching){
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-1">
        <Sidebar channels={followedChannels}/>
        <Content channels={allChannels} getChannels={getChannels}/>
      </div>
    </div>
  )
}

export default DashboardPage
