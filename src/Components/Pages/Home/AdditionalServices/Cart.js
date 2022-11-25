import React from 'react';
import { FiTruck } from "react-icons/fi";
import { GiCartwheel } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";

const Cart = () => {
  return (
    <section className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[6rem]'>
      <div>
        <FiTruck className='text-[52px] text-center p-3 rounded-full text-purple-500 bg-purple-200 '/>
        <h3 className='text-lg font-semibold mt-2'>Safe transportation</h3>
        <p className='text-gray-500'>We give you the best and safely transportation service. we always try to don't give any harm when we transport your car</p>
      </div>
      <div>
        <GiCartwheel className='text-[52px] text-center p-3 rounded-full text-green-500 bg-green-200 '/>
        <h3 className='text-lg font-semibold mt-2'>1 year servicing free</h3>
        <p className='text-gray-500'>We give you 1 year free serviceing. You'll get the best serviceing from us and also with some expencive product</p>
      </div>
      <div>
        <BsPersonFill className='text-[52px] text-center p-3 rounded-full text-yellow-500 bg-yellow-200 '/>
        <h3 className='text-lg font-semibold mt-2'>Free Ownership transfer</h3>
        <p className='text-gray-500'>We give you free Ownership transfer advantage, also with some more papers work free.</p>
      </div>
    </section>
  );
};


// Safe transportation,
// 1 year servicing free,
// Free Ownership transfer

export default Cart;