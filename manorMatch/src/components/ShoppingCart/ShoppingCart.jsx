import React, { useState, useMemo } from 'react';
import { Link } from '@nextui-org/react';
import CartService from './CartService';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import NavBar from '../LandingPage/NavBar';

const ShoppingCart = () => {
  // Sample data for services in the cart
  const [services, setServices] = useState([
    { id: 1, name: 'Pool Cleaning', price: 1500 },
    { id: 2, name: 'Gardening', price: 500 },
    { id: 3, name: 'Housekeeping', price: 500 },
  ]);

  const removeService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  // Calculate the total amount of the services
  const total = useMemo(() => {
    return services.reduce((acc, service) => acc + service.price, 0);
  }, [services]);

  if (services.length === 0) {
    return (
      <section className='max-w-2xl mx-auto my-16 bg-mmblue'>
        <div className='my-4 flex flex-col gap-4 items-center'>
          <p className='text-3xl font-semibold text-mmcream'>Your Service Cart is Empty</p>
          <Link href='/home' className='text-primary font-semibold text-mmcream'>
            Continue Booking
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
    <section className="bg-mmblue min-h-screen">
      <Link href='/home' className='text-primary font-semibold flex items-center text-mmcream'>
        <ChevronLeftIcon className={'w-4 mr-2'} />
        <span>Continue Booking</span>
      </Link>
      <h2 className='text-xl font-semibold text-mmcream my-4'>Selected Services</h2>
      <div className='mt-4'>
        {services.map(service => (
          <CartService
            key={service.id}
            service={service.name}
            price={service.price}
            onRemove={() => removeService(service.id)}
          />
        ))}
        <div className='grid grid-cols-8 pt-2 pb-2 mb-4 items-center'>
        <div className='col-span-5 px-4 flex justify-between items-center'>
          <p className='font-semibold text-mmcream'>Total</p>
        </div>
        <div className='col-start-7 col-span-1 text-right font-semibold text-mmcream'>
          ${total}
        </div>
        <div className='col-start-8 col-span-1'></div>
      </div>
      </div>
    </section>
    </>
  );
};

export default ShoppingCart;
