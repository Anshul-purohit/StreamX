import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx';
import DashboardPage from './DashboardPage/DashboardPage.jsx'
import AuthPage from './AuthPage/AuthPage.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App>
             <Routes>
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/*' element={<DashboardPage />} />
             </Routes>
        </App>
    </BrowserRouter>
)
