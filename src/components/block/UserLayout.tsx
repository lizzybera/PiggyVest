import React from 'react'
import UserHeader from './UserHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sider from './Sider'

const UserLayout = () => {
  return (
    <div>
        <UserHeader />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default UserLayout