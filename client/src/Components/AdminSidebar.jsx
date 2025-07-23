import React, { use } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import {  LayoutDashboard,  ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react';

const AdminSidebar = () => {
  
  const user={
    firstName:"Admin",
    lastName:"User",
    imageUrl: assets.profile,
  }

  const adminNavlinks=[
    {name:"Dashboard", path:"/admin",icon:LayoutDashboard},
    {name:"Add shows", path:"/admin/add-shows",icon:PlusSquareIcon},
    {name:"List Shows",path:"/admin/list-shows",icon:ListIcon},
    {name:"List Bookings" , path:"/admin/list-bookings",icon:ListCollapseIcon}
  ]
   

  return (
    <div>
      <div className=' mt-16 w-60 h-screen border-gray-600 bg-black border-r py-8 fixed  top-0 left-0 z-40'>
        <div className='flex flex-col items-center mb-4'>
          <img src={user.imageUrl} className='w-15 h-15 rounded-full mb-2' alt="Admin" />
          <p>{user.firstName}{user.lastName}</p>
        </div>

        <div className='py-6'>
          {adminNavlinks.map((links,index)=>(
            <NavLink key={index} to={links.path} end className={({isActive})=>`flex h-10 px-10 text-sm gap-2 items-center ${isActive?'bg-primary/20 text-primary font-semibold ':""}`}>
              <links.icon></links.icon>
              <p>{links.name}</p>
            </NavLink>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminSidebar;