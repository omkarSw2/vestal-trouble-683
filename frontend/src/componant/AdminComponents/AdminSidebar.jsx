import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPaintBucket, BsImageFill, BsImages, BsPersonSlash}
 from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'



const AdminSidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsPaintBucket className='icon_header'/> <h3>Art Vista</h3>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        
        <li className='sidebar-list-item'>
            <a href="/adminDashboard">
                <BsGrid1X2Fill className='icon'/>Dashboard
            </a>
        </li>
        
        <li className='sidebar-list-item'>
            <a href="/allusers">
                <BsPeopleFill className='icon'/> Users
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsImages className='icon'/> Posts
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsPersonSlash className='icon'/> Blocked Users
            </a>
        </li>
        {/*<li className='sidebar-list-item'>
            <a href="">
                <BsListCheck className='icon'/> Inventory
            </a>
  </li>*/}
        <li className='sidebar-list-item'>
            <a href="">
                <BsMenuButtonWideFill className='icon'/> Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGearFill className='icon'/> Setting
            </a>
        </li>
    </ul>

    
</aside>
  )
}

export default AdminSidebar
