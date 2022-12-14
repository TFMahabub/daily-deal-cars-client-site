import React from 'react';
import SmallFillButton from '../../../../ReUseableComponents/Button/SmallFillButton';
import BannerImage from '../../../../Assets/BannerImg.png'

const Banner = () => {
  return (
    <section className='pb-8 px-2 lg:px-0 lg:pb-0 lg:h-[420px]' >
      <div className=" mx-auto lg:mt-16 container">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse lg:justify-between">
          <img src={BannerImage} className="lg:w-[520px] mt-5 lg:mt-0 rounded-lg lg:hover:scale-105 lg:duration-500" alt='' />
          <article className=''>
            <h1 className="text-[30px] lg:text-[40px] loading-none lg:leading-[50px] lg:max-w-md font-bold lg:tracking-wide text-center lg:text-start">Find your Best Car rental with easy way</h1>
            <p className="py-3 text-center lg:text-start lg:py-6 lg:max-w-md">Drive performance and your cross-functional collaboration with easy-to-use dashboards, data visualizations, and automated insights in one click</p>
            <div className='flex justify-center lg:justify-start'>
              <a href="#homePageServices" className=''>
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