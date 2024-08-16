import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
    const [isLogin,setIsLogin] = useState(true);

    const handleAuthPageLogin = () => {
        setIsLogin((prev) => !prev)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            {isLogin ? (
                <Login switchAuthHandler={handleAuthPageLogin}/> 
            ) : ( 
                <Register switchAuthHandler={handleAuthPageLogin}/>
            )}
        </div>
    )
}

export default AuthPage
