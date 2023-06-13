import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../components/block/UserLayout'
import LandingPage from '../pages/user/LandingPage'
import AdminLayout from '../components/block/AdminLayout'
import DashBoard from '../pages/admin/DashBoard'
import AboutPage from '../pages/user/AboutPage'
import ChildrenState from '../components/reUse/ChildrenState'
import Error from '../Error/Error'
import Error2 from '../Error/Error2'

export const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:"about",
                element:<ChildrenState>
                     <AboutPage />
                </ChildrenState>
            },
            {
                path:"*",
                element: <Error2 />
            }
        ]
    },
    
])
