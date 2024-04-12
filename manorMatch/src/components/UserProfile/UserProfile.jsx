import NavBar from '../../utils/NavBar.jsx';
import UserControls from '../../utils/UserControlls.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookingHistory from './BookingHistory.jsx';
import UserEstates from './UserEstates.jsx';

const UserProfile = ({ currentUser, addresses }) => {

  const [bookings, setBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [user, setUser] = useState({});
  const [userAddresses, setUserAddresses] = useState([]);

  const getBookings = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/bookings`, {
      params: {
        userId: id
    }})
    .then((response) => {
      const bookings = response.data;

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

  // FUNCTION TO GET ADDRESSES, CURRENT USER, AND SET THEM TO STATE --> PASSED TO BOTH BOOKING AND USER PROFILE
  const getAddresses = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/addresses`, {
      params: {
        userId: id
    }})
    .then((response) => {
      const addresses = response.data;
      setUserAddresses(addresses);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  useEffect(() => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const userEmail = localStorage.getItem('userEmail');
      axios.get(`${apiUrl}/user`, {
        params: {
          email: userEmail
      }})
      .then((response) => {
        const user = response.data[0];
        setUser(user);
        getAddresses(user._id);
        getBookings(user._id)
    })
  }, []);


  return (

    <div className="bg-gray-900 h-screen">
      <NavBar>
        <UserControls/>
      </NavBar>
      <div className='h-40 relative flex items-center justify-center'>
        <img id='hero' src="https://i.imgur.com/MmpBx3n.jpeg" alt="Hero Image" className="absolute object-cover h-40 w-full blur-md contrast-1.25"
          style={{ objectPosition: 'center 47%' }} />
        <div className="absolute inset-0 flex items-center justify-center font-thin">
          <h1 className="text-white text-4xl font-bold">The Control Room</h1>
        </div>
      </div>
      <div className="font-bold text-3xl mb-2 text-center px-6 py-4 text-mmblue">
      </div>
      <div className="border-b border-mmcream transform translate-y-1">
        <button onClick={() => setActiveTab('upcoming')} className={`p-2 rounded ml-4 ${activeTab === 'upcoming' ? 'bg-mmpurple text-mmcream' : 'bg-mmcream text-black' }`}>Upcoming Bookings</button>

        <button onClick={() => setActiveTab('previous')} className={`p-2 rounded ${activeTab === 'previous' ? 'bg-mmpurple text-mmcream' : 'bg-mmcream text-black' }`}>Previous Bookings</button>
        {/* <button onClick={() => setActiveTab('favorites')} className={`p-2 rounded ${activeTab === 'favorites' ? 'bg-mmpurple text-mmcream' : 'bg-mmcream text-black' }`}>Favorite Vendors</button> */}
        <button onClick={() => setActiveTab('addresses')} className={`p-2 rounded ${activeTab === 'addresses' ? 'bg-mmpurple text-mmcream' : 'bg-mmcream text-black' }`}>Your Properties</button>
      </div>
      <div className="flex">
        {activeTab === 'upcoming' && <BookingHistory title="Upcoming Bookings" bookings={upcomingBookings} />}
        {activeTab === 'previous' && <BookingHistory title="Previous Bookings" bookings={previousBookings} />}
        {activeTab === 'favorites' && <div>Favorite Vendors</div>}
        {activeTab === 'addresses' && <UserEstates userAddresses={userAddresses} />}
      </div>

  </div>
  // FAVORITE VENDORS
  );
}

export default UserProfile;
