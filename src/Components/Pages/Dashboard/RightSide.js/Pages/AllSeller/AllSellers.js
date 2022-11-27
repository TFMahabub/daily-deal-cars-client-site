import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleSeller from './SingleSeller';

const AllSellers = () => {

  const { data: allSellers = [], refetch} = useQuery({
    queryKey: ['allSellers'],
    queryFn: async()=>{
      const res = await fetch(`https://daily-deal-cars-server-site.vercel.app/user/seller`)
      const data = await res.json();
      return data;
    }
  })
  return (
      <section className="overflow-x-auto lg:col-span-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th  className='bg-slate-100 rounded-none'>Name</th>
              <th  className='bg-slate-100 rounded-none'>Email</th>
              <th  className='bg-slate-100 rounded-none'>Verification</th>
              <th  className='bg-slate-100 rounded-none'>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            allSellers.map(seller=> 
            <SingleSeller
              seller = {seller}
              refetch={refetch}
            ></SingleSeller>)
          }
          </tbody>
        </table>
      </section>
  );
};

export default AllSellers;