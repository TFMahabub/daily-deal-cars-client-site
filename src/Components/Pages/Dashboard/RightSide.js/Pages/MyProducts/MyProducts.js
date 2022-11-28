import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';
import { DashboardContext } from '../../../../../../Contexts/AuthProvider/Dashboard/DashboardProvider';
import SingleProduct from './SingleProduct';

const MyProducts = () => {

  const { user } = useContext(AuthContext)
  const {data: myProducts = [], refetch} = useQuery({
    queryKey: ['myProducts'],
    queryFn: async()=>{
      const res = await fetch(`https://daily-deal-cars-server-site.vercel.app/categories?email=${user.email}`)
      const data = await res.json()
      return data;
    }
  })

  console.log(myProducts);

  return (
    <div className='lg:col-span-4 '>
     <section className=''>


     <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className='bg-slate-100 rounded-none'>Products</th>
              <th className='bg-slate-100 rounded-none'>Price</th>
              <th className='bg-slate-100 rounded-none'>Make Advertise</th>
              <th className='bg-slate-100 rounded-none'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              myProducts?.map(myPr=> 
              <SingleProduct
              key={myPr._id}
                myPr={myPr}
                refetch={refetch}
              ></SingleProduct>)
            }
          </tbody>  
        </table>
      </div>
     </section>
    </div>
  );
};

export default MyProducts;