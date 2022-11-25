import React from 'react';
import AdditionalServicesText from './AdditionalServicesText';
import Cart from './Cart';

const AdditionalServices = () => {
  return (
    <div className='container mt-[5rem] lg:mt-[150px] mx-auto px-2 lg:px-0'>
      <AdditionalServicesText></AdditionalServicesText>
      <Cart></Cart>
    </div>
  );
};

export default AdditionalServices;