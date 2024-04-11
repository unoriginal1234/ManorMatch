import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../utils/NavBar.jsx';

const PaymentSuccess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      localStorage.setItem('vendors', JSON.stringify([]));
    }
  }, [sessionId]);


  return (
    <>
      <NavBar />
      <div style={{"position":"absolute","top":"40%","left":"50%","transform":"translate(-50%, -50%)"}}>
        <div className="animate-bounce text-center text-mmcream text-8xl -z-9 font-serif">M | M</div>
      </div>
      <section className="bg-mmblue min-h-screen flex justify-center items-center px-8 pt-32">
        <div className="text-center text-mmcream">
          <h1 className='text-3xl font-semibold'>Thank You For Your Payment!</h1>
          <p className='text-xl my-4'>A payment to ManorMatch will appear on your statement</p>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;

