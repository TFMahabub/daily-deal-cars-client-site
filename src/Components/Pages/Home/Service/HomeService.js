import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ServicesText from './ServicesText';
import SingleCardService from './SingleCardService';

const HomeService = () => {

  const {data: services ,isLoading} = useQuery({
    queryKey: ['services'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/services')
      const data = res.json()
      return data;
    }
  })

  if(isLoading){
    return <p>Loading...</p>
  }

  console.log(services);
  console.log(isLoading);
  return (
    <section>
      <ServicesText></ServicesText>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 lg:gap-8'>
        {
          services.map(service=> 
          <SingleCardService
            key={service._id}
            service= {service}
          ></SingleCardService>)
        }
      </div>
    </section>
  );
};

export default HomeService;