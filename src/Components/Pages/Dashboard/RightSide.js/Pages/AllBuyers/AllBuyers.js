import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleBuyers from './SingleBuyers';

const AllBuyers = () => {
  const {data: allBuyers = [], refetch} = useQuery({
    queryKey: ['allBuyers'],
    queryFn: async()=>{
      const res = await fetch('https://daily-deal-cars-server-site.vercel.app/user/buyer')
      const data = await res.json()
      return data;
    }

  })
  return (
      <section className="overflow-x-auto lg:col-span-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th className='bg-slate-100 rounded-none'>Name</th>
              <th className='bg-slate-100 rounded-none'>Email</th>
              <th className='bg-slate-100 rounded-none'>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            allBuyers.map(buyer=>
            <SingleBuyers
              buyer={buyer}
              refetch={refetch}
            ></SingleBuyers>)
          }
          </tbody>
        </table>
      </section>
  );
};

export default AllBuyers;