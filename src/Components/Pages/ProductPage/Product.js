import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Product = () => {

  const {data: products, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: async()=>{
      const res = await fetch()
    }
  })
  return (
    <div className='container mx-auto'>
      <h2>product</h2>
    </div>
  );
};

export default Product;