import React from 'react';

const SmallFillButton = ({children}) => {
  return (
    <button className="rounded-sm bg-primary py-[9px] px-6 text-lg tracking-wide text-[#fff] border-0">{children}</button>
  );
};

export default SmallFillButton;