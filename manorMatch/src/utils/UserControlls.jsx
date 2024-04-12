import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../components/ShoppingCart/icons/CartIcon.jsx';
import { signOut } from '../components/UserAuthentication/SignOut.jsx'


const UserControls = () => {
  const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  return (
    <div className="flex justify-between items-center w-full">
      <Link to="/home" className="text-2xl px-3 py-1 rounded hover:text-mmcream font-semibold transition-colors">
        Home
      </Link>
      <span className="flex items-center">
        <Link to="/profile" className="mr-4 border border-mmcream p-2 rounded hover:bg-mmblue">
          Welcome, {currentUser.firstName} {currentUser.lastName}
        </Link>
        <Link to="/" onClick={signOut} className="ml-2">
          Sign Out
        </Link>
        <Link to="/cart" className="ml-2 mr-4 relative hover:text-mmcream">
          <CartIcon />
          {vendors.length > 0 && (
            <span className='w-5 h-5 rounded-full bg-mmsand text-mmblue hover:bg-mmcream text-xs flex items-center justify-center absolute -right-2 -top-2 text-center'>
              {vendors.length}
            </span>
          )}
        </Link>
      </span>
    </div>
  );
};

export default UserControls;
