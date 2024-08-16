import React from 'react'
import logoPlaceholder from "../resources/images/logoPlaceholder.svg"

const Logo = ({ text }) => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-6">
        <img className="w-10 h-10" src={logoPlaceholder} alt="StreamX Logo" />
        <span className="text-xl font-bold text-purple-500">{text}</span>
    </div>
  )
}

export default Logo
