import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';
import SingleOrder from './SingleOrder';
import toast from 'react-hot-toast';

const MyOrders = () => {
  const { user } = useContext(AuthContext)

  //loaded order with userEmail-
  const {data: orders = [], refetch} = useQuery({
    queryKey: ['orders'],
    queryFn:  async()=>{
      const res = await fetch(`https://daily-deal-cars-server-site.vercel.app/booking?email=${user?.email}`)
      const data = await res.json()
      return data;
    }
  })
  console.log(orders);
  //item delete method
  const handleCancel = id =>{
    if(window.confirm("Do you want to delete the Product?") === true){
      fetch(`https://daily-deal-cars-server-site.vercel.app/booking/${id}`, {
        method: "DELETE"
      })
      .then(res=> {
        if(res.status === 200){
          refetch()
          toast.error('Item deleted')
        }
      })
      .catch(err=>console.error(err))
    }
  }

  return (
    <div className='lg:col-span-4 '>
     <section className=''>


     <div className="overflow-x-auto  w-full ">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead cla>
            <tr>
              <th className='bg-slate-100 rounded-none'>Products</th>
              <th className='bg-slate-100 rounded-none'>Price</th>
              <th className='bg-slate-100 rounded-none'>Payment/Cancelation</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              orders.map(order=> 
              <SingleOrder
                key={order._id}
                order={order}  
                handleCancel={handleCancel}
              ></SingleOrder>)
            }
          </tbody>  
        </table>
      </div>
     </section>
    </div>
  );
};

export default MyOrders;