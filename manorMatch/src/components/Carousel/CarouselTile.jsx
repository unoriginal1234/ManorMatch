import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ imageUrl }) => {
  return (
    <div className="bg-mmblue p-6 flex flex-col justify-center items-center">
      <CarouselImage imageUrl={imageUrl} />
      <br />
      <p className="text-white text-center text-3xl">Description</p>
    </div>
  );
};

export default CarouselTile;
