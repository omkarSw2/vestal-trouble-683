import React, { useState } from 'react'
import AdminHeader from '../componant/AdminComponents/AdminHeader'
import AdminSidebar from '../componant/AdminComponents/AdminSidebar'
import AdminHome from '../componant/AdminComponents/AdminHome'
import "../pages/Admin.css"
import {Routes,Route} from "react-router-dom"
import AdminUsers from '../componant/AdminComponents/AdminUsers'
import AdminBlock from '../componant/AdminComponents/AdminBlock'

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
      <Route path="dashboard" element={<AdminHome />}/>
        <Route path="Ausers" element={<AdminUsers/>}/>
        <Route path="Busers" element={<AdminBlock/>}/>
      </Routes>
      
    </div>
  )
}

export default Admin