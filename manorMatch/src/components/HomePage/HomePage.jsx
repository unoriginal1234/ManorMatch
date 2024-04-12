import Carousel from '../Carousel/Carousel.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from '../../utils/NavBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserControls from '../../utils/UserControlls.jsx';


const HomePage = ({}) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const userEmail = localStorage.getItem('userEmail');
    axios.get(`${apiUrl}/user`, {
      params: {
        email: userEmail
    }})
    .then((response) => {
      const user = response.data[0];
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
  })
  }, []);

  return (
    <><div className='overflow-visible bg-gray-900 h-[95vh] w-[90wh]'>
      <NavBar>
        <UserControls/>
      </NavBar>
      <div className='h-40 relative flex items-center justify-center'>
        <img id='hero' src="https://i.imgur.com/MmpBx3n.jpeg" alt="Hero Image" className="absolute object-cover h-40 w-full blur-md contrast-1.25"
          style={{ objectPosition: 'center 47%' }} />
        <div className="absolute inset-0 flex items-center justify-center font-thin">
          <h1 className="text-white text-4xl font-bold">Your truly refined services await.</h1>
        </div>
      </div>
      <Carousel currentUser={currentUser} />
    </div><div className='bg-gray-900 h-20'></div>
    </>
  );
};

export default HomePage;
