import React from 'react';

const CarouselTile = ({ imageUrl }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt="Carousel Image" className="w-full" />
      <button className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded">
        Button
      </button>
    </div>
  );
};

export default CarouselTile;
