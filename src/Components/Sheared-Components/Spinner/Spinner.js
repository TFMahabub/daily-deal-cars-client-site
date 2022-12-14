import React from 'react';

const Spinner = () => {
  return (
    <div className=" h-[90vh] flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
    </div>
  );
};

export default Spinner;