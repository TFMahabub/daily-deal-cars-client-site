import React from 'react';

const FullWidthButton = ({children, extraClass}) => {
  return (
    <button className={`bg-primary py-[9px] w-full rounded-md ${extraClass} text-lg tracking-wide text-[#fff]`}>{children}</button>
  );
};

export default FullWidthButton;