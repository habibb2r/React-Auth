import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';


const Privateroute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location= useLocation();
    
    if(user){
        return children;
    }
    return <Navigate state={{from : location}}  to="/signin" replace></Navigate>
    
};

export default Privateroute;