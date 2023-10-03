import React, { useState } from 'react'
import AdminHeader from '../componant/AdminComponents/AdminHeader'
import AdminSidebar from '../componant/AdminComponents/AdminSidebar'
import AdminHome from '../componant/AdminComponents/AdminHome'
import "../pages/Admin.css"
import {Routes,Route} from "react-router-dom"
import AdminUsers from '../componant/AdminComponents/AdminUsers'

const Admin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-containers'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        <Route path="/adminDashboard" element={<AdminHome />}/>
        <Route path="/allusers" element={<AdminUsers/>}/>
      </Routes>
      
    </div>
  )
}

export default Admin