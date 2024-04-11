import { useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage.jsx';
import Carousel from './components/Carousel/Carousel.jsx'
import UserAuth from './components/UserAuthentication/UserAuth.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Booking from './components/Booking/Booking.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
import CartIcon from './components/ShoppingCart/icons/CartIcon.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SignUpPage from './components/UserAuthentication/SignUp.jsx'
import PaymentSuccess from './components/ShoppingCart/PaymentSuccess.jsx'
import ChatModal from './components/LiveChat/ChatModal.jsx'
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { socket } from './socket.js'
import UserProfile from './components/UserProfile/UserProfile.jsx'
import axios from 'axios';

function App() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("bg-30011E hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg opacity-100 text-xl");
  const [currentUser, setCurrentUser] = useState({});
  const [addresses, setAddresses] = useState([]);


  useEffect(() => {
    if (isChatModalOpen) {
      setButtonStyle("bg-mmpurple text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg  text-xl border-2 border-white-500");
    } else {
      setButtonStyle("bg-mmblue hover:opacity-90 hover:bg-mmpurple text-white  py-4 px-8 rounded-full inline-flex items-center shadow-lg text-xl border-2 border-white-500");
    }
  }, [isChatModalOpen]);

  if (!localStorage.getItem('vendors')) {
    localStorage.setItem('vendors', '[]');
  }

  const toggleChatModal = () => {
    setIsChatModalOpen(prevState => !prevState);
  };

  // FUNCTION TO GET ADDRESSES, CURRENT USER, AND SET THEM TO STATE --> PASSED TO BOTH BOOKING AND USER PROFILE
  const getAddresses = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/addresses`, {
      params: {
        userId: id
    }})
    .then((response) => {
      const addresses = response.data;
      setAddresses(addresses);
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
      setCurrentUser(user);
      getAddresses(user._id);
    })
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={
            <>
              <UserAuth />
              {/* Sample link to the home page, could be replaced by login button later*/}
              <Link to="/home">Home</Link>
            </>
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={
            <>
              <HomePage currentUser={currentUser} assresses={addresses}/>
              {/* Currently all these components will be rendered on the "/home" path */}
              {/*
              <Carousel />
              <VendorModal />
              <Booking />
              <LiveChat />
              <Link to="/cart">
                <CartIcon />
              </Link>*/}
            </>
          }
        />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/profile" element={<UserProfile currentUser={currentUser} addresses={addresses}/>} />
      </Routes>
    <div>
      <button
    onClick={toggleChatModal}
    className={`${buttonStyle} fixed left-34 bottom-20`}
  >
    <MdOutlineRealEstateAgent size={24} />
    <span className="text-lg">Talk to Concierge</span>
  </button>

          {isChatModalOpen && (
            <ChatModal
              socket={socket}
              toggleChatModal={toggleChatModal}
              setIsChatModalOpen={setIsChatModalOpen}
            />
          )}
    </div>
    </Router>


  );
}

export default App;
