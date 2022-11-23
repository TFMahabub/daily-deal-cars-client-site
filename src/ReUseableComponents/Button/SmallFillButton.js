import React from 'react';

const SmallFillButton = ({children}) => {
  return (
    <button className="rounded-sm bg-primary py-[11px] px-6 text-[#fff] border-0">{children}</button>
  );
};

export default SmallFillButton;