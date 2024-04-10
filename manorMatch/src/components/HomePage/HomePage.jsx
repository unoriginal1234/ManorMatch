import Carousel from '../Carousel/Carousel.jsx';
import UserAuth from '../UserAuthentication/UserAuth.jsx';
import LiveChat from '../LiveChat/LiveChat.jsx';
import Booking from '../Booking/Booking.jsx';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx';
import CartIcon from '../ShoppingCart/icons/CartIcon.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from '../../utils/NavBar.jsx';
const HomePage = ({ }) => {
  // insert Carousel into return statement below
  const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');

  return (
    <div>
      <NavBar>
        <span className="text-lg flex items-center">
          Logged in as Sir Bool /
          <Link to="/login" className="ml-2">
            Sign Out
          </Link>
          <Link to="/cart" className="ml-4 mr-4 relative">
            <CartIcon />
            {vendors.length > 0 &&
              <span className='w-5 h-5 rounded-full bg-mmsand text-mmblue text-xs flex items-center justify-center absolute -right-2 -top-2 text-center'>
                {vendors.length}
              </span>
            }
        </Link>
        </span>
      </NavBar>
      <Carousel />
    </div>
  );
};

export default HomePage;
