import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

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
      axios.post('http://localhost:3000/signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1
      })
        .then((response) => {
          console.log(response.data);
          navigate('/home');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUpSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
          </div>
          <div>
            <label>Email Address:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} required></input>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required></input>
          </div>
          {/* <Link to="/home" className="text-lg"> */}
          <button type="submit">Sign Up</button>
          {loginError ? <p className="text-red-500">{loginError}</p> : null}
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
