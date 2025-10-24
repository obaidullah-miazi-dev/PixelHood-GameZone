import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext)
    const location = useLocation()
    // console.log(location);
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;