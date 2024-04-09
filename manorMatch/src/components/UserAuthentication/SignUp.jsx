import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../utils/NavBar.jsx';

const SignUpPage = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setLoginError('Passwords do not match');
      return;
    } else if (password1.length < 8) {
      setLoginError('Password must be at least 8 characters long');
      return;
    } else if (!/\d/.test(password1)) {
      setLoginError('Password must contain a number');
      return;
    } else if (!/[!@#$%^&*]/.test(password1)) {
      setLoginError('Password must contain a special character');
      return;
    } else if (!/[A-Z]/.test(password1)) {
      setLoginError('Password must contain an uppercase letter');
      return;
    } else if (!/[a-z]/.test(password1)) {
      setLoginError('Password must contain a lowercase letter');
      return;
    } else {
      console.log('completed, going into post')
      const apiUrl = import.meta.env.VITE_API_URL;
      axios.post(`${apiUrl}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1
      })
        .then((response) => {
          localStorage.setItem("userEmail", email);
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div className="bg-gray-900">
      <NavBar />
      <div className="text-mmsand text-2xl flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-mmblue rounded-lg shadow md:mt-0 sm:max-w-md px-10 py-10">
          <h1 className="text-center">Sign Up</h1>
          <form onSubmit={handleSignUpSubmit}>
            <div className="py-2">
              <label className="block py-2 mb-2 text-2xl font-large text-gray-900 dark:text-white">First Name:</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500" placeholder="your first name" required></input>
            </div>
            <div className="py-2">
              <label className="block py-2 mb-2 text-2xl font-large text-gray-900 dark:text-white">Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500" placeholder="your last name" required></input>
            </div>
            <div className="py-2">
              <label className="block py-2 mb-2 text-2xl font-large text-gray-900 dark:text-white">Email Address:</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@example.com" required></input>
            </div>
            <div className="py-2">
              <label className="block py-2 mb-2 text-2xl font-large text-gray-900 dark:text-white">Password:</label>
              <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500" placeholder="********" required></input>
            </div>
            <div className="py-2">
              <label className="block py-2 mb-2 text-2xl font-large text-gray-900 dark:text-white">Confirm Password:</label>
              <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700  placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500" placeholder="********" required></input>
            </div>
            <div className="py-6">
            <button type="submit" className="w-full text-gray-900 text-2xl bg-mmsand hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center">Sign Up</button>
            {loginError ? <p className="text-red-500">{loginError}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
