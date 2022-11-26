import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleSeller from './SingleSeller';

const AllSellers = () => {

  const { data: allSellers = [], refetch} = useQuery({
    queryKey: ['allSellers'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/user/seller`)
      const data = await res.json();
      return data;
    }
  })
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