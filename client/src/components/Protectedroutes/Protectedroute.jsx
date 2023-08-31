import React from 'react'
import { Navigate } from 'react-router-dom'
import Admindashboard from '../../pages/Dashboard/Admindashboard/Admindashboard';
import Dashboard from '../../pages/Dashboard/Dashboard';

const Protectedroute = ({isAuthenticated,isAdmin}) => {
    if(!isAuthenticated)
    {
      console.log("not authenticated");
        return <Navigate to="/login" />
    } 
  return (
    <> {isAdmin ? <Admindashboard/> : <Dashboard/>}</>
  )
}

export default Protectedroute
