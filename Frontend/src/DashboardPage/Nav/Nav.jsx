import React from 'react'
import logo from '../../resources/images/logoPlaceholder.svg'

const NavLogo = () => {
    return (
        <div>
            <img src={logo}/>
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span onClickHandler={onClickHandler}>
            {text}
        </span>
    )
}

const Nav = () => {
  return (
    <div className="container mx-auto">
        <NavLogo />
        <div>
            <NavButton text="Browse" onClickHandler={() => {}}/>
            <NavButton text="Login" onClickHandler={() => {}}/>
                <div>
                    <NavButton text="My Account" onClickHandler={() => {}}/>
                    <NavButton text="Logout" onClickHandler={() => {}}/>
                </div>
        </div>
    </div>
  )
}

export default Nav
