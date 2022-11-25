import React from 'react';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import Banner from './Banner/Banner';
import IconSection from './IconSection/IconSection';
import HomeService from './Service/HomeService';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <IconSection></IconSection>
      <HomeService></HomeService>
      <AdditionalServices></AdditionalServices>
    </div>
  );
};

export default Home;