import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBuyers from './SingleBuyers';

const AllBuyers = () => {
  const [allBuyers, setAllBuyers] = useState([])
  const [refetchdata, setRefetchdata] = useState(false)

  useEffect(() => {
    axios.get(`https://daily-deal-cars-server-site.vercel.app/user/buyer`)
    .then((res) => {
      setAllBuyers(res?.data);
    });
  }, [refetchdata]);

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
              key={buyer._id}
              buyer={buyer}
              setRefetchdata={setRefetchdata}
            ></SingleBuyers>)
          }
          </tbody>
        </table>
      </section>
  );
};

export default AllBuyers;