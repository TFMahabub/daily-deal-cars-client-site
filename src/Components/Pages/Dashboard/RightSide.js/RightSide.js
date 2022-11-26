import React, { useContext } from 'react';
import { DashboardContext } from '../../../../Contexts/AuthProvider/Dashboard/DashboardProvider';

const RightSide = () => {
  const { dbUsers } = useContext(DashboardContext)
  console.log(dbUsers);
  return (
    <div className='bg-red-400 lg:col-span-5'>
      <h2>Right</h2>
    </div>
  );
};

export default RightSide;