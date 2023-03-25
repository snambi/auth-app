/**
 * https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
 */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    return currentUser ? <>{children}</> : <Navigate to='/login' />
}

export default PrivateRoute