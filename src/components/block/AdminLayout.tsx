import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sider from './Sider'

const AdminLayout = () => {
  return (
    <div>
        <AdminHeader />
        <Sider />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AdminLayout