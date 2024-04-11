import Carousel from '../Carousel/Carousel.jsx';
import UserAuth from '../UserAuthentication/UserAuth.jsx';
import LiveChat from '../LiveChat/LiveChat.jsx';
import Booking from '../Booking/Booking.jsx';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import CartIcon from '../ShoppingCart/icons/CartIcon.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from '../../utils/NavBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';


const HomePage = ({}) => {
  // insert Carousel into return statement below
  const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');
  const [currentUser, setCurrentUser] = useState({});
//#30011E

 // FUNCTION TO GET ADDRESSES, CURRENT USER, AND SET THEM TO STATE --> PASSED TO BOOKING

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
})
}, []);


  return (
    <div className='overflow-visible bg-mmblue'>
      <NavBar>
        <span className="text-lg flex items-center height-fit">
          <Link to="/profile" className="mr-4 border border-mmcream p-2 rounded hover:bg-mmblue">
          Welcome, {currentUser.firstName} {currentUser.lastName}
          </Link>
          <Link to="/login" className="ml-2">
            Sign Out
          </Link>
          <Link to="/cart" className="ml-4 mr-4 relative hover:text-mmcream">
            <CartIcon />
            {vendors.length > 0 &&
              <span className='w-5 h-5 rounded-full bg-mmsand text-mmblue hover:bg-mmcream text-xs flex items-center justify-center absolute -right-2 -top-2 text-center'>
                {vendors.length}
              </span>
            }
        </Link>
        </span>
      </NavBar>
      <Carousel currentUser={currentUser} />
    </div>
  );
};

export default HomePage;
