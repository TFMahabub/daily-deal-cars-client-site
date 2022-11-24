import React from 'react';
import Banner from './Banner/Banner';
import IconSection from './IconSection/IconSection';
import HomeService from './Service/HomeService';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <IconSection></IconSection>
      <HomeService></HomeService>
    </div>
  );
};

export default Home;