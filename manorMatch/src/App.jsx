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
//import io from 'socket.io-client';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { socket } from './socket.js'
import UserProfile from './components/UserProfile/UserProfile.jsx'

function App() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  // const [socket, setSocket] = useState(null);

  if (!localStorage.getItem('vendors')) {
    localStorage.setItem('vendors', '[]');
  }

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Socket connected!!!! ID:', socket.id.substring(0, 5))
      });
      socket.on('message', (message) => {
        console.log('Received message:', message);
      });
    }
  }, []);

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
      <div>
      <button onClick={toggleChatModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full inline-flex items-center opacity-70"><MdOutlineRealEstateAgent size={24} />
<span className="text-lg">Talk to concierge</span></button>
        {isChatModalOpen && <ChatModal socket={socket} toggleChatModal={toggleChatModal}/>}
      </div>
    </Router>


  );
}

export default App;
