import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../LandingPage/NavBar';

const PaymentSuccess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('session_id');

  return (
    <>
      <NavBar />
      <section className="bg-mmblue min-h-screen flex justify-center items-center px-8">
        <div className="text-center text-mmcream">
          <h1 className='text-3xl font-semibold'>Thank You For Your Payment!</h1>
          <p className='text-xl my-4'>A payment to ManorMatch will appear on your statement</p>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;

