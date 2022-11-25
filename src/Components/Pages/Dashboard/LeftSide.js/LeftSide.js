import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import Spinner from '../../../Sheared-Components/Spinner/Spinner';

const LeftSide = ({dbUsers}) => {

  return (
    <div className='bg-green-300 lg:col-span-1'>
      {
        dbUsers?.userCategories === 'buyer' &&
        <>
          <h4>My orders</h4>
        </>
      }
    </div>
  );
};

export default LeftSide;