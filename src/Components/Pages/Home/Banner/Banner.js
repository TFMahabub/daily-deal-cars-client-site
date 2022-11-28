import React from 'react';
import SmallFillButton from '../../../../ReUseableComponents/Button/SmallFillButton';
import BannerImage from '../../../../Assets/BannerImg.png'

const Banner = () => {
  return (
    <section className='pb-8 px-2 lg:px-0 lg:pb-0 lg:h-[450px]' >
      <div className=" mx-auto lg:mt-16 container">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:justify-between">
          <img src={BannerImage} className="lg:w-[550px] mt-5 lg:mt-0 rounded-lg lg:hover:scale-105 lg:duration-500" alt='' />
          <article className=''>
            <h1 className="text-[25px] lg:text-[40px] leading-[50px] lg:max-w-md font-bold tracking-wide">Find your Best Car rental with easy way</h1>
            <p className="py-3 lg:py-6 lg:max-w-md">Drive performance and your cross-functional collaboration with easy-to-use dashboards, data visualizations, and automated insights in one click</p>
            <div className='flex space-x-2'>
            <a href="#homePageServices">
              <SmallFillButton href='#homePageServices'>Booking Now</SmallFillButton>
            </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;