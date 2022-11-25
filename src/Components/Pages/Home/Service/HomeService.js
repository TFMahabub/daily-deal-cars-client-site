import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Spinner from '../../../Sheared-Components/Spinner/Spinner';
import ServicesText from './ServicesText';
import SingleCardService from './SingleCardService';

const HomeService = () => {

  const {data: services, isLoading} = useQuery({
    queryKey: ['services'],
    queryFn: async()=>{
      const res = await fetch('https://daily-deal-cars-server-site.vercel.app/services')
      const data = res.json()
      return data;
    }
  })

  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <section className='px-2 lg:px-0 mt-[5rem] lg:mt-[150px]'>
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