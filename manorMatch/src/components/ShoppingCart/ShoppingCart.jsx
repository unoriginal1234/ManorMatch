import React, { useState } from 'react';
import { Button, Link } from '@nextui-org/react';
import CartService from './CartService';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon'

const ShoppingCart = () => {
  // Sample data for services in the cart
  const [services, setServices] = useState([
    { id: 1, name: 'Pool Cleaning', price: 1200 },
    { id: 2, name: 'Gardening', price: 800 },
  ]);


  const removeService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  if (services.length === 0) {
    return (
      <section className='max-w-2xl mx-auto my-16'>
        <div className='my-4 flex flex-col gap-4 items-center'>
          <p className='text-3xl font-semibold'>Your Service Cart is Empty</p>
          <Link href={'/login'} className='text-primary font-semibold'>
            Continue Booking
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='pt-10 pb-20 max-w-6xl mx-auto bg-mmblue'>
      <Link href={'/'} className='text-primary font-semibold flex items-center text-mmcream'>
        <ChevronLeftIcon className={'w-4 mr-2'} />
        <span>Continue Booking</span>
      </Link>
      <div className='mt-4'>
        {services.map(service => (
          <CartService
            key={service.id}
            service={service.name}
            price={service.price}
            onRemove={() => removeService(service.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ShoppingCart;
