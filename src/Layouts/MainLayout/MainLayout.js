import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Sheared-Components/Footer/Footer';
import Nav from '../../Components/Sheared-Components/Navbar/Nav';

const MainLayout = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;