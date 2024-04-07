import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const UserAuth = () => {
  // Your component logic goes here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
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
          <button type="submit">Login</button>
          Don't have an account?&nbsp;
          <Link to="/signup">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;