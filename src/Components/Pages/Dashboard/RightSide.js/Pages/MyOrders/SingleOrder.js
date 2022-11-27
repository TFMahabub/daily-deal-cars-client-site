import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({order, handleCancel}) => {
  const {selectedItemImg, modelName, BrandName, reSellPrice, _id } = order;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={selectedItemImg}  alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-semibold">{BrandName}</div>
            <div className="text-sm opacity-50">{modelName}</div>
          </div>
        </div>
      </td>
      <td>
        Price: <span className='text-primary'>{reSellPrice}</span>
        <br/>
        <span className="badge badge-ghost badge-sm">available</span>
      </td>
      <th>
        <button onClick={()=>handleCancel(_id)} className="px-3 py-1 font-normal rounded-lg bg-red-300 hover:bg-red-400 duration-150 text-red-800  mr-2">Cancel</button>
        <Link to='/payment'>
          <button className="px-3 py-1 font-normal rounded-lg bg-purple-300 hover:bg-primary duration-150 text-purple-800 hover:text-white">Pay</button>
        </Link>
      </th>
    </tr>
  );
};

export default SingleOrder;