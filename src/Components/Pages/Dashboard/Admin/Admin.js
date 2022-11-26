import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import LeftSide from '../LeftSide.js/LeftSide';
import RightSide from '../RightSide.js/RightSide';

const Admin = () => {
  const { user } = useContext(AuthContext)

  const { data: dbUsers = [] } = useQuery({
    queryKey: ['dbUsers'],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/user?email=${user.email}`);
        const data = await res.json();
        return data
    }
});

  return (
    <section className='grid grid-cols-1 lg:grid-cols-7'>
      <LeftSide
        dbUsers={dbUsers}
      ></LeftSide>
      <RightSide
        dbUsers={dbUsers}
      ></RightSide>
    </section>
  );
};

export default Admin;