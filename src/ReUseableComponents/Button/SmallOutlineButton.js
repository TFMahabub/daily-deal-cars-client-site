import React from 'react';

const SmallOutlineButton = ({children}) => {
  return (
    <button className="rounded-sm border-2 text-lg tracking-wide hover:bg-primary border-primary py-[9px] px-6 text-primary hover:text-[#fff]">{children}</button>
  );
};

export default SmallOutlineButton;