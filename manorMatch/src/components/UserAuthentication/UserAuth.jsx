import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../utils/NavBar.jsx';

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.post(`${apiUrl}/login`, {
      email: email,
      password: password
    })
    .then((response) => {
      return new Promise((resolve) => {
        localStorage.setItem("userEmail", email);
        resolve();
      })
      .then(() => {
        navigate('/home');
      })
    })
      .catch((error) => {
        console.log('failed')
        console.error(error);
      })
  }

  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="text-mmsand text-2xl flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-mmblue rounded-lg shadow md:mt-0 sm:max-w-md px-10 py-10">
        <h1 className="text-center">Login</h1>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label className="block py-2 mb-2 text-2xl font-large text-white">Email Address:</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@example.com" required></input>
            </div>
            <div>
              <label className="block pt-3 mb-2 text-2xl font-large text-white">Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="********" required></input>
            </div>
            <div className="py-6">
              <button type="submit" className="w-full text-gray-900 text-2xl bg-mmsand hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center">Login</button>
            </div>
            <div className="text-center">
              Don't have an account?&nbsp;
              <Link to="/signup">
                <span className="underline">Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;