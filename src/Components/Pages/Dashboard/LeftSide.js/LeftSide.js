import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DashboardContext } from '../../../../Contexts/AuthProvider/Dashboard/DashboardProvider';

const LeftSide = () => {
  const { dbUsers } = useContext(DashboardContext)


  console.log(dbUsers);
  return (
    <div className='bg-slate-100 lg:col-span-2 p-7 text-xl font-semibold'>
      {
        dbUsers?.userCategory === 'buyer' &&
        <>
          <Link to='/dashboard/my_orders'>
          <h4 className='w-full py-3 rounded-lg hover:bg-slate-200 cursor-pointer text-center bg-slate-200'>My orders</h4>
          </Link>
          
        </>
      }
      {
        dbUsers?.userCategory === 'seller' &&
        <>
          <Link to='/dashboard/add_a_product'>
            <h4 className='w-full py-3 rounded-lg hover:bg-slate-200 cursor-pointer text-center '>Add A product</h4>
          </Link>
          <Link to='/dashboard/my_products'>
            <h4 className='w-full py-3 rounded-lg hover:bg-slate-200 cursor-pointer text-center'>My Products</h4>
          </Link>
          <Link to='/dashboard/my_buyers'>
            <h4 className='w-full py-3 rounded-lg hover:bg-slate-200 cursor-pointer text-center'>My Buyers</h4>
          </Link>
        </>
      }
      {
        dbUsers?.userCategory === 'admin' &&
        <>
          <Link to='/dashboard/all_sellers'>
            <h4 className='w-full py-3 rounded-lg hover:bg-slate-200 cursor-pointer text-center'>All Sellers</h4>
          </Link>
          <Link to='/dashboard/all_buyers'>
            <h4 className='w-full py-3 rounded-lg hover:bg-slate-200 cursor-pointer text-center'>All Buyers</h4>
          </Link>
        </>
      }
    </div>
  );
};

export default LeftSide;