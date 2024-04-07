import React from 'react';

const CarouselImage = ({ imageUrl }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt="Carousel Image" className="w-full" />

      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      <button
        className="absolute bottom-2 right-2 bg-mmblue text-white px-4 py-2 rounded hover:bg-black"
        onClick={() => {
          console.log('ummm');
        }}
      >
        Button
      </button>
    </div>
  );
};

export default CarouselImage;
