import React from 'react';

const ServicesText = ({top, bottom}) => {
  return (
      <article className='text-center'>
        <h3 className='text-xl text-primary font-semibold'>{top}</h3>
        <p className='text-4xl font-semibold'>{bottom}</p>
      </article>
  );
};

export default ServicesText;