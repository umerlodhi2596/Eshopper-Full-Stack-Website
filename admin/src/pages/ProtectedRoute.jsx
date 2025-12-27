import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {

  const {isAdmin, loading} = useContext(AuthContext);

  if(loading) return <h3>...Loading</h3>

  if(!isAdmin) return <Navigate to={'/login'} replace/>;

  return children;
}

export default ProtectedRoute
