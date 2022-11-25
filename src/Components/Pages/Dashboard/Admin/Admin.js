import React from 'react';
import LeftSide from '../LeftSide.js/LeftSide';
import RightSide from '../RightSide.js/RightSide';

const Admin = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-6'>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </section>
  );
};

export default Admin;