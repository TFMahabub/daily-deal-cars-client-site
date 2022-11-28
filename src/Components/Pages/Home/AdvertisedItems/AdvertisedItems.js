import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ServicesText from '../Service/ServicesText';
import SingleAdvertiseProduct from './SingleAdvertiseProduct';

const AdvertisedItems = () => {
  const {data: advertisedProducts = []} = useQuery({
    queryKey: ['advertisedProduct'],
    queryFn: async()=>{
      const res= await fetch(`https://daily-deal-cars-server-site.vercel.app/categories_advertise`,)
      const data = res.json()
      return data
    }
  })
  return (
    <section className={`mt-[150px] px-2 lg:px-0 ${advertisedProducts.length > 0? 'block': 'hidden'}`}>
      <ServicesText top="Advertised" bottom="Item is Here"></ServicesText>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-8'>
        {
          advertisedProducts.map(product=>
          <SingleAdvertiseProduct
            key= {product._id}
            product={product}
          ></SingleAdvertiseProduct>)
        }
      </div>
    </section>
  );
};

export default AdvertisedItems;