import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPaintBucket, BsImageFill, BsImages, BsPersonSlash, BsFiles, BsDoorClosed}
 from 'react-icons/bs'
import { FaClosedCaptioning, FaUser } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io';



const AdminSidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        {/* <div className='sidebar-brand'>
            <BsPaintBucket className='icon_header'/> <h3>Art Vista</h3>
        </div> */}
        <span className='icon close_icon' onClick={OpenSidebar}><IoMdClose /></span>
    </div>

    <ul className='sidebar-list'>
        
    <li className='sidebar-list-item' style={{ display: 'flex', gap:"5", alignItems: 'center' }}>
    <BsGrid1X2Fill className='icon' style={{ marginBottom: '5px',margin:"10" }} />
    <a href="/admin/dashboard">
        <h1>Dashboard</h1>
    </a>
</li>
        
        <li className='sidebar-list-item' style={{ display: 'flex', gap:"5", alignItems: 'center' }}>
        <BsPeopleFill className='icon' style={{ marginBottom: '5px',margin:"10" }}/>
            <a href="/admin/Ausers">
                 <h1>Users</h1>
            </a>
        </li>
        <li className='sidebar-list-item' style={{ display: 'flex', gap:"5", alignItems: 'center' }}>
        <BsImages className='icon' style={{ marginBottom: '5px',margin:"10" }}/>
            <a href="#">
                 <h1>Posts</h1>
            </a>
        </li>
        <li className='sidebar-list-item' style={{ display: 'flex', gap:"5", alignItems: 'center' }}>
        <BsPersonSlash className='icon' style={{ marginBottom: '5px',margin:"10" }}/>
            <a href="/admin/Busers">
            <h1>Blocked Users</h1>
            </a>
        </li>
        {/*<li className='sidebar-list-item'>
            <a href="">
                <BsListCheck className='icon'/> Inventory
            </a>
  </li>*/}
        <li className='sidebar-list-item' style={{ display: 'flex', gap:"5", alignItems: 'center' }}>
        <BsFillArchiveFill className='icon' style={{ marginBottom: '5px',margin:"10" }}/>
            <a href="#">
                 <h1>Reports</h1>
            </a>
        </li>
        <li className='sidebar-list-item' style={{ display: 'flex', gap:"5", alignItems: 'center' }}>
        <BsFillGearFill className='icon' style={{ marginBottom: '5px',margin:"10" }}/>
            <a href="#">
                 <h1>Setting</h1>
            </a>
        </li>
    </ul>

    
</aside>
  )
}

export default AdminSidebar