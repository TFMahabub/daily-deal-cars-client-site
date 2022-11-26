import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleBuyers from './SingleBuyers';

const AllBuyers = () => {
  const {data: allBuyers = [], refetch} = useQuery({
    queryKey: ['allBuyers'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/user/buyer')
      const data = await res.json()
      return data;
    }

  })
  console.log(allBuyers);
  return (
      <section className="overflow-x-auto lg:col-span-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
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