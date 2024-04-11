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
//#30011E
  return (
    <><div className='overflow-visible bg-gray-900 h-[95vh] w-[95wh]'>
      <NavBar>
        <span className="text-lg flex items-center height-fit">
          Logged in as Sir Bool /
          <Link to="/login" className="ml-2 hover:text-mmcream">
            Sign Out
          </Link>
          <Link to="/cart" className="ml-4 mr-4 relative hover:text-mmcream">
            <CartIcon />
            {vendors.length > 0 &&
              <span className='w-5 h-5 rounded-full bg-mmsand text-mmblue hover:bg-mmcream text-xs flex items-center justify-center absolute -right-2 -top-2 text-center'>
                {vendors.length}
              </span>}
          </Link>
        </span>
      </NavBar>
      <div className='h-40 relative flex items-center justify-center'>
        <img id='hero' src="https://i.imgur.com/MmpBx3n.jpeg" alt="Hero Image" className="absolute object-cover h-40 w-full blur-md contrast-1.25"
          style={{ objectPosition: 'center 47%' }} />
        <div className="absolute inset-0 flex items-center justify-center font-thin">
          <h1 className="text-white text-4xl font-bold">Truly refined services await.</h1>
        </div>
      </div>
      <Carousel />
    </div><div className='bg-gray-900 h-20'></div></>
  );
};

export default HomePage;
