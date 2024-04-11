import NavBar from '../../utils/NavBar.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookingHistory from './BookingHistory.jsx';
import UserEstates from './UserEstates.jsx';

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');

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
      const userEmail = localStorage.getItem('userEmail');
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
      <div>
        <button onClick={() => setActiveTab('upcoming')} className={`p-2 rounded ${activeTab === 'upcoming' ? 'bg-mmblue text-mmcream' : 'bg-gray-200 text-black' }`}>Upcoming Bookings</button>

        <button onClick={() => setActiveTab('previous')} className={`p-2 rounded ${activeTab === 'previous' ? 'bg-mmblue text-mmcream' : 'bg-gray-200 text-black' }`}>Previous Bookings</button>
        <button onClick={() => setActiveTab('favorites')} className={`p-2 rounded ${activeTab === 'favorites' ? 'bg-mmblue text-mmcream' : 'bg-gray-200 text-black' }`}>Favorite Vendors</button>
        <button onClick={() => setActiveTab('addresses')} className={`p-2 rounded ${activeTab === 'addresses' ? 'bg-mmblue text-mmcream' : 'bg-gray-200 text-black' }`}>Estates</button>
      </div>
      <div className="flex">
        {activeTab === 'upcoming' && <BookingHistory title="Upcoming Bookings" bookings={upcomingBookings} />}
        {activeTab === 'previous' && <BookingHistory title="Previous Bookings" bookings={previousBookings} />}
        {activeTab === 'favorites' && <div>Favorite Vendors</div>}
        {activeTab === 'addresses' && <UserEstates currentUser={currentUser}/>}
      </div>

  </div>
  // FAVORITE VENDORS
  );
}

export default UserProfile;
