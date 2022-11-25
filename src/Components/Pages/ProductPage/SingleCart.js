import React from 'react';
import { Link } from 'react-router-dom';
import FullWidthButton from '../../../ReUseableComponents/Button/FullWidthButton';

const SingleCart = ({product, setSelectedItem}) => {

  const { categories_id, brand, name, seller_name, verification, original_price,
          resale_price, years_of_use, location, post_time, img } = product;





  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="">
          <button onClick={()=>setSelectedItem({name, resale_price})} className='bg-primary py-[9px] w-full rounded-md text-lg tracking-wide text-[#fff]'>
            <label htmlFor="my-modal-3" className='cursor-pointer'>Book</label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;