import React from 'react'
import logo from '../../resources/images/logoPlaceholder.svg'
import useUserDetails from '../../shared/hooks/useUserDetails'
import { useNavigate } from 'react-router-dom'

const NavLogo = () => {
    return (
        <div>
            <img src={logo}/>
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span onClick={onClickHandler}>
            {text}
        </span>
    )
}

const Nav = () => {

    const { isLogged, logout } = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuth = () => {
        navigate('/auth')
    }

    const handleNavigateToSettings = () => {
        console.log("clicked")
        navigate('/settings')
    }

    const handleNavigateToChannels = () => {
        navigate('/channels')
    }

    const handleLogout = () => {
         logout()
    }

  return (
    <div className="container mx-auto">
        <NavLogo />
        <div>
            <NavButton text="Browse" onClickHandler={handleNavigateToChannels}/>
            {!isLogged ? (
                <NavButton text="Login" onClickHandler={handleNavigateToAuth}/>
            ) : (
                <div>
                    <NavButton text="My Account" onClickHandler={handleNavigateToSettings}/>
                    <NavButton text="Logout" onClickHandler={handleLogout}/>
                </div>
            )}   
        </div>
    </div>
  )
}

export default Nav
