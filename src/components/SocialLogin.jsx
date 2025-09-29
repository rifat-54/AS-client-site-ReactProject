import React from 'react';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const SocialLogin = () => {

    const{googleLogin}=useAuth()

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(()=>{
            toast.success('succesfully login')
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            {/* Social Signup */}
        <button onClick={handleGoogleLogin} className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium">Sign Up with Google</span>
        </button>

        </div>
    );
};

export default SocialLogin;