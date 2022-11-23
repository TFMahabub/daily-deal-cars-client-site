import React from 'react';
import SmallFillButton from '../../../../ReUseableComponents/Button/SmallFillButton';
import SmallOutlineButton from '../../../../ReUseableComponents/Button/SmallOutlineButton';

const Banner = () => {
  return (
    <section className='pb-8 lg:pb-0 lg:h-[580px]' >
      <div className="hero mx-auto lg:mt-16 container">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
          <img src={'https://i.ibb.co/rykyrvD/vw-4115347-1920.jpg'} className="lg:w-1/2 rounded-lg lg:hover:scale-105 lg:duration-300 shadow-2xl" alt='' />
          <article>
            <h1 className="text-[25px] lg:text-[40px] leading-[50px] lg:max-w-md font-bold tracking-wide">Find your Best Car rental with easy way</h1>
            <p className="py-3 lg:py-6 lg:max-w-md">Drive performance and your cross-functional collaboration with easy-to-use dashboards, data visualizations, and automated insights in one click</p>
            <div className='flex space-x-2'>
              <SmallFillButton>Booking Now</SmallFillButton>
              <SmallOutlineButton>See all Cars</SmallOutlineButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Banner;