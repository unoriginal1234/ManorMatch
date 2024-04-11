import React, { useState } from 'react';
import CarouselModal from './CarouselModal';
import Booking from '../Booking/Booking.jsx';
import { set } from 'mongoose';

const CarouselImage = ({ imageUrl, description, serviceDetails, category, addresses }) => {
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
  const [checkoutModalIsOpen, setCheckoutModalIsOpen] = useState(false);
  const closeDetailsModal = () => {
    setDetailsModalIsOpen(false);
  };
  const closeCheckoutModal = () => {
    setCheckoutModalIsOpen(false);
  };
  return (
    <>
      <div className="relative">
        <div
          className="group cursor-pointer"
          onClick={() => {
            setDetailsModalIsOpen(true);
          }}
        >
          <img
            className="w-80 h-80 object-cover object-center transition occacity-100 duration-500 ease-in-out group-hover:blur  group-hover:opacity-80"
            src={imageUrl}
            alt="Carousel Image"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-center text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </span>
          </div>
        </div>
        <button
          className="absolute bottom-2 right-2 bg-mmblue text-white px-4 py-2 rounded hover:bg-black"
          onClick={() => {
            setCheckoutModalIsOpen(true);
          }}
        >
          Reserve
        </button>
        <CarouselModal
          modalIsOpen={detailsModalIsOpen}
          closeModal={closeDetailsModal}
          serviceDetails={serviceDetails}
          imageUrl={imageUrl}
          category={category}
        />
      </div>
      {checkoutModalIsOpen && (
        <Booking
          category={category}
          modalIsOpen={checkoutModalIsOpen}
          setModalIsOpen={closeCheckoutModal}
          addresses={addresses}
        />
      )}
    </>
  );
};

export default CarouselImage;
