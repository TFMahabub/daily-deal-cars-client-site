import React from 'react';
import { FiTruck } from "react-icons/fi";
import { GiCartwheel } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";

const Cart = () => {
  const services = [
    {
      icon: <FiTruck className='text-[52px] text-center p-3 rounded-full text-purple-500 bg-purple-200 '/>,
      title: 'Safe transportation',
      descriptions: "We give you the best and safely transportation service. we always try to don't give any harm when we transport your car"
    },
    {
      icon: <GiCartwheel className='text-[52px] text-center p-3 rounded-full text-green-500 bg-green-200 '/>,
      title: '1 year servicing free',
      descriptions: "We give you 1 year free serviceing. You'll get the best serviceing from us and also with some expencive product"
    },
    {
      icon: <BsPersonFill className='text-[52px] text-center p-3 rounded-full text-yellow-500 bg-yellow-200 '/>,
      title: 'Free Ownership transfer',
      descriptions: "We give you free Ownership transfer advantage, also with some more papers work free."
    },
  ]


  return (
    <section className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[6rem]'>
      {
        services?.map(service=>
          <div className='flex flex-col items-center'>
            {service?.icon}
            <h3 className='text-lg font-semibold mt-2'>{service?.title}</h3>
            <p className='text-gray-500 text-center'>{service?.descriptions}</p>
          </div>
          )
      }
      
    </section>
  );
};

export default Cart;