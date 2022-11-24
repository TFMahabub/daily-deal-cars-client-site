import React from 'react';
import { SiTesla, SiHonda, SiBmw, SiVolvo, SiMazda, SiMini, SiToyota, SiKia } from "react-icons/si";

const IconSection = () => {
  return (
    <div className='container hidden mx-auto lg:flex items-center justify-between'>
      <SiTesla className='text-5xl opacity-30' />
      <SiHonda className='text-5xl opacity-30' />
      <SiBmw className='text-5xl opacity-30' />
      <SiVolvo className='text-5xl opacity-30' />
      <SiMazda className='text-5xl opacity-30' />
      <SiMini className='text-5xl opacity-30' />
      <SiToyota className='text-5xl opacity-30' />
      <SiKia className='text-5xl opacity-30' />
    </div>
  );
};

export default IconSection;