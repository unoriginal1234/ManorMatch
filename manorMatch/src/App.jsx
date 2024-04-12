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
  const [buttonStyle, setButtonStyle] = useState("mb-2 ml-12 bg-30011E hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg opacity-100 text-xl");

  useEffect(() => {
    if (isChatModalOpen) {
      setButtonStyle("mb-1 ml-12 bg-mmpurple text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg  text-xl border-2 border-white-500");
    } else {
      setButtonStyle("mb-1 ml-12 bg-mmblue hover:opacity-90 hover:bg-mmpurple text-white  py-4 px-8 rounded-full inline-flex items-center shadow-lg text-xl border-2 border-white-500");
    }
  }, [isChatModalOpen]);

  if (!localStorage.getItem('vendors')) {
    localStorage.setItem('vendors', '[]');
  }

  const toggleChatModal = () => {
    setIsChatModalOpen(prevState => !prevState);
  };



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
              <HomePage />
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
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <div className="fixed left-34 bottom-10 z-10">
  <button onClick={toggleChatModal} className={buttonStyle}>
    <MdOutlineRealEstateAgent size={24} />
    <span className="ml-2 text-lg">Concierge</span>
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
