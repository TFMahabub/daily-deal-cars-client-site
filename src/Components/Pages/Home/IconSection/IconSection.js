import React from 'react';
import { SiTesla, SiHonda, SiBmw, SiVolvo, SiMazda, SiMini, SiToyota, SiKia } from "react-icons/si";

const IconSection = () => {
  return (
    <div className='container hidden mx-auto lg:flex items-center justify-between'>
      <SiTesla className='text-[38px] opacity-30' />
      <SiHonda className='text-[46px] opacity-30' />
      <SiBmw className='text-[48px] opacity-30' />
      <SiVolvo className='text-[46px] opacity-30' />
      <SiMazda className='text-[49px] opacity-30' />
      <SiMini className='text-[90px] opacity-30' />
      <SiToyota className='text-[54px] opacity-30' />
      <SiKia className='text-[80px] opacity-30' />
    </div>
  );
};

export default IconSection;