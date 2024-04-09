import NavBar from '../../utils/NavBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const userEmail = 'Loy_Blick@gmail.com';
    axios.get(`${apiUrl}/user`, {
      params: {
        email: userEmail
    }})
    .then((response) => {
      setCurrentUser(response.data[0]);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }
  , []);


  return (

    // WHICH NAV BAR TO GRAB
    <>
    <NavBar />
    <div className="color-mmblue">
      <h1>Welcome back, {currentUser.firstName} {currentUser.lastName}</h1>
    </div>
    <div>
      <h2>Your Current Bookings</h2>
      <div>
        <h3>Booking 1</h3>
        <p>Vendor: Vendor Name</p>
        <p>Service: Service Name</p>
        <p>Date: Date</p>
      </div>
      <div>
        <h3>Booking 2</h3>
        <p>Vendor: Vendor Name</p>
        <p>Service: Service Name</p>
        <p>Date: Date</p>
      </div>
    </div>
    <div>
      <h2>Previous Bookings</h2>
      <div>
        <h3>Booking 1</h3>
        <p>Vendor: Vendor Name</p>
        <p>Service: Service Name</p>
        <p>Date: Date</p>
      </div>
      <div>
        <h3>Booking 2</h3>
        <p>Vendor: Vendor Name</p>
        <p>Service: Service Name</p>
        <p>Date: Date</p>
      </div>
    </div>
    </>

  // FAVORITE VENDORS
  );
}

export default UserProfile;