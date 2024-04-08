import './App.css'
import HomePage from './components/HomePage/HomePage.jsx';
import Carousel from './components/Carousel/Carousel.jsx'
import VendorModal from './components/VendorModal/VendorModal.jsx'
import UserAuth from './components/UserAuthentication/UserAuth.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import LiveChat from './components/LiveChat/LiveChat.jsx'
import Booking from './components/Booking/Booking.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
import CartIcon from './components/ShoppingCart/icons/CartIcon.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
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
        } />
        <Route path="/home" element={
          <>
          <HomePage />
          {/* Currently all these components will be rendered on the "/home" path */}
          <Carousel />
          {/* <VendorModal /> */}
          <Booking />
          <LiveChat />
          <Link to="/cart">
            <CartIcon />
          </Link>
        </>
        } />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}


export default App;


