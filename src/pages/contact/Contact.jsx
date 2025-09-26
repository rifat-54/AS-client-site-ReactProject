import React, { useContext } from 'react';
import { authContext } from '../../authprovider/AuthProvider';

const Contact = () => {
    const data=useContext(authContext)
    
    return (
        <div>
            contact page
        </div>
    );
};

export default Contact;