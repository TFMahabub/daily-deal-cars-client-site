import React from 'react';

const SingleProduct = ({myPr, refetch}) => {
  const { brand, name, resale_price, img } = myPr;
  
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
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
      <td><button className='bg-primary text-white px-3 py-1 rounded-lg tracking-wide duration-150 hover:bg-[#5543f8]'>Advertise</button></td>
      <th>
        <button className="px-3 py-1 font-normal rounded-lg bg-red-200 hover:bg-red-500 duration-150 hover:text-white">Delete</button>
      </th>
    </tr>
  );
};

export default SingleProduct;