import React, { useContext } from 'react';
import { DashboardContext } from '../../../../Contexts/AuthProvider/Dashboard/DashboardProvider';

const RightSide = () => {
  const { dbUsers } = useContext(DashboardContext)
  return (
    <div className='bg-red-400 lg:col-span-4'>
      <h2>Right</h2>
    </div>
  );
};

export default RightSide;