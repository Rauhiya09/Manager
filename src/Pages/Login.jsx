/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function SignInPage() {

  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');

  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();


    try{
      const response=await axios.get(`http://localhost:8080/api/user/${username}`);
      const userdata=await response.data;
      console.log(userdata.username);

      if(userdata.username === username && userdata.password === password){

        localStorage.setItem("userId", userdata.id);

        alert("good")
        navigate("/MainLayout")
      }else{
        alert("bad")
      }


    }catch(error){
      console.error(error);
    }
    

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {/* <h1 className="text-2xl font-bold mb-4">{isRegistering ? 'Register' : 'Sign In'}</h1> */}
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
        <h1 className='p-5' style={{textAlign: "center", fontFamily: "sans-serif"}}>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
           {/* 'Register' : 'Sign In'} */}
           Login
        </button>
        <div className='row p-5'>
          <NavLink to='/register'>Does not have an account sign up here</NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
