import React, { useState } from "react";
import CarouselModal from "./CarouselModal";
import { set } from "mongoose";

const CarouselImage = ({ imageUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='relative'>
      <div
        className='group'
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <img
          className='w-full transition occacity-100 duration-500 ease-in-out group-hover:blur  group-hover:opacity-80'
          src={imageUrl}
          alt='Carousel Image'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            More infomation
          </span>
        </div>
      </div>
      <button
        className='absolute bottom-2 right-2 bg-mmblue text-white px-4 py-2 rounded hover:bg-black'
        onClick={() => {
          //setModalIsOpen(true);
        }}
      >
        Reserve
      </button>
      <CarouselModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default CarouselImage;
