import React, { useState } from 'react'
import AdminHeader from '../componant/AdminComponents/AdminHeader'
import AdminSidebar from '../componant/AdminComponents/AdminSidebar'
import AdminHome from '../componant/AdminComponents/AdminHome'
import "../pages/Admin.css"
import {Routes,Route} from "react-router-dom"

const Admin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        <Route path="/adminDashboard" element={<AdminHome />}/>
      </Routes>
      
    </div>
  )
}

export default Admin
