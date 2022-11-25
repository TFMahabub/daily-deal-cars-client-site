import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Sheared-Components/Footer/Footer';
import Nav from '../../Components/Sheared-Components/Navbar/Nav';

const MainLayout = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='lg:px-14'>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;