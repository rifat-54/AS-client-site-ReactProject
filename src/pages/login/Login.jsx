import React from 'react';

import { useState } from "react";
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/SocialLogin';
const Login = () => {

  const{loginUser}=useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // TODO: add your login logic here
     
      loginUser(email,password)
      .then((currentUser)=>{
        console.log('user',currentUser?.user);
      })
      .catch((err)=>{
        console.log('error-> ',err);
      })
      
  }
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1D99F9] to-[#FB9A24] p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Logo / Brand Name */}
        <h1 className="text-3xl font-bold text-center text-[#1D99F9] mb-6">
          Astha Source
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D99F9]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB9A24]"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1D99F9] to-[#FB9A24] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <SocialLogin></SocialLogin>

        {/* Extra Options */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#FB9A24] font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );




};

export default Login;