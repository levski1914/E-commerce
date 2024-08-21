import React, { useEffect, useState } from 'react'
import {Route,Navigate} from 'react-router-dom'
import { useAuth } from './AuthContext'
import { toast } from 'react-toastify'
const ProtectedRoutes = ({children}) => {
  
  const {currentUser}=useAuth();
  const [notified,setNotified]=useState(false);

  useEffect(()=>{
    if(!currentUser && !notified){
        toast.error("must to be logged/registered");
        setNotified(true);
    }
  },[currentUser,notified])

  if(!currentUser){
    return <Navigate to="/" replace />

  }
    return children
}

export default ProtectedRoutes