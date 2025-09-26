import React, { useContext } from 'react';
import { authContext } from '../authprovider/AuthProvider';

const useAuth = () => {

    const auth=useContext(authContext)

    return auth;


};

export default useAuth;