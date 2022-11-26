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
      const res = await fetch(`http://localhost:5000/categories?email=${user.email}`)
      const data = await res.json()
      return data;
    }
  })

  console.log(myProducts);

  return (
    <div className='lg:col-span-5 '>
     <h2 className='text-center text-2xl font-semibold text-primary'>My Product</h2>
     <section className='mt-4'>


     <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Make Advertise</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              myProducts.map(myPr=> 
              <SingleProduct
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