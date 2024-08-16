import React from 'react';
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx';
import DashboardPage from './DashboardPage/DashboardPage.jsx'
import AuthPage from './AuthPage/AuthPage.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App>
            <RouterProvider router={router} />
        </App>
    </React.StrictMode>
)
