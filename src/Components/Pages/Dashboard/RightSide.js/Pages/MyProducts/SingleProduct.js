import React from 'react';
import { toast } from 'react-toastify';

const SingleProduct = ({myPr, refetch}) => {
  const { brand, name, resale_price, img, _id, advertise } = myPr;
  
  const handleAdvertise = id =>{
    fetch(`https://daily-deal-cars-server-site.vercel.app/categories/${id}`, {
      method: 'PUT'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Product Advertised')
        refetch()
      }
      else{
        toast.error('Somethig went wrong')
      }
    })
  }

  const handleDelete = id =>{
   
    if(window.confirm("Do you want to delete the Product?") === true){
      fetch(`https://daily-deal-cars-server-site.vercel.app/categories/${id}`, {
        method: "DELETE"
      })
      .then(res=> {
        refetch()
      })
      .catch(err=>console.error(err))
    }
  }
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-semibold">{brand}</div>
            <div className="text-sm opacity-50">{name}</div>
          </div>
        </div>
      </td>
      <td>
        Price: <span className='text-primary'>{resale_price}</span>
        <br/>
        <span className="badge badge-ghost badge-sm">available</span>
      </td>
      <td>{advertise? <h4>Product Already Advertise</h4> : <button onClick={()=>handleAdvertise(_id)} className='bg-primary text-white px-3 py-1 rounded-lg tracking-wide duration-150 hover:bg-[#5543f8]'>Advertise</button>}</td>
      <th>
        <button onClick={()=>handleDelete(_id)} className="px-3 py-1 font-normal rounded-lg bg-red-200 hover:bg-red-500 duration-150 hover:text-white">Delete</button>
      </th>
    </tr>
  );
};

export default SingleProduct;