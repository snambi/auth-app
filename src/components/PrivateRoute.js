/**
 * https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
 */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ children }) => {
    const { currentUser, loggedin } = useAuth();
    
    console.log("Private Route: currentUser: " + JSON.stringify(currentUser) + ", LoggedIn="+ loggedin);

    return loggedin ? <>{children}</> : <Navigate to='/login' />
}

export default PrivateRoute