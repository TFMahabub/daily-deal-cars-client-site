import React from 'react';
import { HiBadgeCheck } from "react-icons/hi";

const SingleCart = ({product, setSelectedItem, setOpenModal}) => {

  const { categories_id, brand, name, seller_name, verification, original_price,
          resale_price, years_of_use, location, post_time, img } = product;




  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
          <h3 className='flex items-center'>Seller Name: <span className='text-primary'>{seller_name}</span>{verification ==='verified' && <HiBadgeCheck className='text-xl ml-1 text-primary'/>}</h3>
          <h3>Post at: <span className='text-primary'>{post_time}</span></h3>
          <h3>Location: {location}</h3>
          <h3>{years_of_use} used</h3>
          <h3>Original Price: <span className='text-primary'>{original_price}</span></h3>
          <h3>Resell Price <span className='text-primary'>{resale_price}</span></h3>

          <label 
          onClick={()=>{
            setOpenModal('open')
            setSelectedItem({
              name, 
              resale_price, 
              img,
              brand
            })
          }}
          htmlFor="Booking-Modal" 
          className='btn border-0 mt-3 cursor-pointer bg-primary py-[9px] w-full rounded-md text-lg tracking-wide text-[#fff]'
          >
            Book Now
          </label>
      </div>
    </div>
  );
};

export default SingleCart;