import './App.css'
import { useState } from 'react';
import HomePage from './components/HomePage/HomePage.jsx';
import Carousel from './components/Carousel/Carousel.jsx'
import VendorModal from './components/VendorModal/VendorModal.jsx'
import UserAuth from './components/UserAuthentication/UserAuth.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Booking from './components/Booking/Booking.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ChatModal from './components/LiveChat/ChatModal.jsx'

function App() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);


  const toggleChatModal = () => {
    setIsChatModalOpen(prevState => !prevState);
  console.log(isChatModalOpen)

  };
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<UserAuth />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
          </Routes>
        </Router>
      </div>
      <div>
        <Carousel />
        <VendorModal />
        <Booking />
        <ShoppingCart />
      </div>
      <button onClick={toggleChatModal}>Toggle Chat</button>
     {isChatModalOpen && <ChatModal toggleChatModal={toggleChatModal}/>}
    </>
  )
}

export default App


