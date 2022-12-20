import React, { useState } from 'react';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import IconSection from './IconSection/IconSection';
import HomeService from './Service/HomeService';

const Home = () => {
  // const [user, seUser] = useState
  return (
    <div className=''>
      <Banner></Banner>
      <IconSection></IconSection>
      <HomeService></HomeService>
      <AdditionalServices></AdditionalServices>
      <AdvertisedItems></AdvertisedItems>
    </div>
  );
};

export default Home;