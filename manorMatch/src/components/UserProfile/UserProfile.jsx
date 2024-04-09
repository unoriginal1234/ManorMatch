import NavBar from '../../utils/NavBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState({});

  const getBookings = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/user`, {
      params: {
        userId: id
    }})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }


  useEffect(() => {
    const getUserAndBookings = () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const userEmail = 'Brenden_Cummerata@yahoo.com';
      axios.get(`${apiUrl}/user`, {
        params: {
          email: userEmail
      }})
      .then((response) => {
        const user = response.data[0];
        setCurrentUser(user);
        getBookings(user._id)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }

    getUserAndBookings();
  }
  , []);


  return (

    // WHICH NAV BAR TO GRAB
    <>
    <NavBar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 color-mmblue">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
        <div className="font-bold text-xl mb-2 text-center px-6 py-4">
          <h1>Welcome back, {currentUser.firstName} {currentUser.lastName}.</h1>
        </div>

    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-gray-200">
      <h2 >Your Current Bookings</h2>
      <div>
        <h3>Booking 1</h3>
        <p>Vendor: Vendor Name</p>
        <p>Service: Service Name</p>
        <p>Date: Date</p>
        </div>
      </span>

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
    </div>
    </>

  // FAVORITE VENDORS
  );
}

export default UserProfile;
