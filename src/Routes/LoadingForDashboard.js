import React, { useContext } from 'react';
import Spinner from '../Components/Sheared-Components/Spinner/Spinner';
import { DashboardContext } from '../Contexts/AuthProvider/Dashboard/DashboardProvider';

const LoadingForDashboard = ({children}) => {
  const { loading} = useContext(DashboardContext)
  if(loading){
    return <Spinner></Spinner>
  }
  return children;
  
};

export default LoadingForDashboard;