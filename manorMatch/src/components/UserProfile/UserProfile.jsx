import NavBar from '../../utils/NavBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookingHistory from './BookingHistory.jsx';

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  const getBookings = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/bookings`, {
      params: {
        userId: id
    }})
    .then((response) => {
      const bookings = response.data

      const vendorPromises = bookings.map((booking) => {
        return booking.services.map((service) => {
          return axios.get(`${apiUrl}/vendorInfo`, {
            params: {
              id: service.vendorId
            }
          })
          .then((vendorResponse) => {
            service.vendorPhoto = vendorResponse.data.photo;
            service.vendorName = vendorResponse.data.name;
          })
        })
      })

      return Promise.all(vendorPromises.flat()).then(() => bookings);
    })
    .then((bookings) => {
      const upcomingBookings = bookings.filter((booking) => new Date(booking.jobDate) > new Date());
      const previousBookings = bookings.filter((booking) => new Date(booking.jobDate) < new Date());

      setBookings(bookings);
      setPreviousBookings(previousBookings);
      setUpcomingBookings(upcomingBookings);
    })

    .catch((error) => {
      console.error('Error:', error);
    })
}

  useEffect(() => {
    const getUserAndBookings = () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const userEmail = 'Naomie_Fadel65@yahoo.com';
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

    <div>
      <NavBar />
      <div className="font-bold text-3xl mb-2 text-center px-6 py-4 text-mmblue">
        <h1>Welcome back, {currentUser.firstName} {currentUser.lastName}. </h1>
      </div>
      <div className="flex">
      <BookingHistory title="Upcoming Bookings" bookings={upcomingBookings} />
      <BookingHistory title="Previous Bookings" bookings={previousBookings} />
    </div>
  </div>
  // FAVORITE VENDORS
  );
}

export default UserProfile;
