import axios from 'axios';    
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_SERVER_API,
    withCredentials:true
})


const useAxiosSecure = () => {
    const{logoutUser}=useAuth()
    const navigate=useNavigate();

    useEffect(()=>{

        // add interceptor (like a security guard for every request/responst)
        const interceptor=axiosSecure.interceptors.response.use(
            (res)=>{
                return res;     //if response is okay just return it.
            },
            (error)=>{
                // if server says Unauthorized (401) or Forbidden (403)
                if(error?.response?.status===401 || error?.response?.status===403){
                    logoutUser()   //logout user
                    navigate('/login')    //send to login page
                }

                return Promise.reject(error);   //pass error forward so .catch() can see it
            }
        )

        // cleanup -> remove the interceptor when not needed
        return()=>{
            axiosSecure.interceptors.response.eject(interceptor);
        }

    },[logoutUser,navigate])



    return axiosSecure;    // return the secure axios instance
    
};

export default useAxiosSecure;