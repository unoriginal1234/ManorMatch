import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data);
        navigate('/home');
      })
      .catch((error) => {
        console.log('failed')
        console.error(error);
      })
  }

  return (
    <div className="bg-mmblue text-mmsand w-screen ">
      This is the User Authentication
      <div className="">
        Login
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Email Address:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            Don't have an account?&nbsp;
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;