import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar'
import AdminSidebar from '../../Components/AdminSidebar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
        <AdminNavbar/>
     <div className='flex '>
        <AdminSidebar/>
          <div className=" mt-12 ml-58 p-4 min-h-screen overflow-y-auto  ">
        <Outlet/>
        </div>
      
    </div>
    </>
  )
}

export default Layout
