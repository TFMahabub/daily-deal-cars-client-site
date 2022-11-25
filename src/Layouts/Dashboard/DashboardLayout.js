import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Sheared-Components/Navbar/Nav';

const DashboardLayout = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;