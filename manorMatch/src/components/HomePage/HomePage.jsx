import Carousel from '../Carousel/Carousel.jsx';
//import VendorModal from '../VendorModal/VendorModal.jsx';
import UserAuth from '../UserAuthentication/UserAuth.jsx';
import LiveChat from '../LiveChat/LiveChat.jsx';
import Booking from '../Booking/Booking.jsx';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import CartIcon from '../ShoppingCart/icons/CartIcon.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from '../../utils/NavBar.jsx';
const HomePage = () => {
  // insert Carousel into return statement below

  return (
    <div>
      {/*<NavBar>
          <Link to="/login" className="text-lg">
            Join / Login
          </Link>
        </NavBar>*/}
      <NavBar>
        <span className="text-lg">
        Logged in as Sir Bool /
        <Link to="/login">
            {" "}Sign Out
        </Link>
        </span>
      </NavBar>
      <Carousel />
      <Booking />
      <Link to="/cart">
        <CartIcon />
      </Link>
    </div>
  );
};

export default HomePage;
