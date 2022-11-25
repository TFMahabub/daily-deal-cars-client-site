import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import LeftSide from '../LeftSide.js/LeftSide';
import RightSide from '../RightSide.js/RightSide';

const Admin = () => {
  const { user, loading } = useContext(AuthContext)

  
  const {data: dbUser = {}} = useQuery({
    queryKey: ['dbUser'],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
      const data = await res.json()
      return data;
    }
  })


  console.log(dbUser);
  return (
    <section className='grid grid-cols-1 lg:grid-cols-6'>
      <LeftSide
        dbUser={dbUser}
      ></LeftSide>
      <RightSide
        
      ></RightSide>
    </section>
  );
};

export default Admin;