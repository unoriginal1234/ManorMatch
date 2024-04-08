import './App.css'
import HomePage from './components/HomePage/HomePage.jsx';
import Carousel from './components/Carousel/Carousel.jsx'
import VendorModal from './components/VendorModal/VendorModal.jsx'
import UserAuth from './components/UserAuthentication/UserAuth.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import LiveChat from './components/LiveChat/LiveChat.jsx'
import Booking from './components/Booking/Booking.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SignUpPage from './components/UserAuthentication/SignUp.jsx'
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({}); // {name: Boolthelean}
  const [shoppingCartItems, setShoppingCartItems] = useState({}); // {service-1: cleaning, service-2: lawn mowing}

  // to make it look like the user is logged in, have current username displayed in nav

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<UserAuth />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
          </Routes>
        </Router>
      </div>
      <div>
        <Carousel />
        <VendorModal />
        <Booking />
        <LiveChat />
        <ShoppingCart />
      </div>
    </>
  )
}

export default App


