import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

export const DashboardContext = createContext()

const DashboardProvider = ({children}) => {


  const { user } = useContext(AuthContext)

  const { data: dbUsers = [] } = useQuery({
    queryKey: ['dbUsers'],
    queryFn: async () => {
        const res = await fetch(`https://daily-deal-cars-server-site.vercel.app/user?email=${user.email}`);
        const data = await res.json();
        return data
    }
  });

  const dashInfo = {
    dbUsers
  }

  return (
    <DashboardContext.Provider value={dashInfo}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;