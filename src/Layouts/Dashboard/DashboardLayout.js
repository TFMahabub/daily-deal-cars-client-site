import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../../Components/Pages/Dashboard/LeftSide.js/LeftSide';
import Nav from '../../Components/Sheared-Components/Navbar/Nav';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import DashboardProvider from '../../Contexts/AuthProvider/Dashboard/DashboardProvider';

const DashboardLayout = () => {




  return (
    <DashboardProvider>
      <div className='max-w-[1440px] mx-auto'>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;