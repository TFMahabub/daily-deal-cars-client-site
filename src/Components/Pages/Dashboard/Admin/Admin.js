import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../LeftSide.js/LeftSide';

const Admin = ({dbUsers}) => {


  return (
    <section className='lg:col-span-5'>
      <div className='grid grid-cols-1 lg:grid-cols-7 lg:h-[90vh]'>
        <LeftSide></LeftSide>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Admin;