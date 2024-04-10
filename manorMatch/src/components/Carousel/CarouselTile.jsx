import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ imageUrl, category, description, serviceDetails }) => {
  return (
    <div className="bg-mmblue p-6 flex flex-col justify-center items-center">
      <CarouselImage imageUrl={imageUrl} description={description} serviceDetails={serviceDetails} category={category}/>
      <br />
      <p className="text-white text-center text-xs sm:text-sm md:text-lg lg:text-xl font-thin overflow-hidden overflow-ellipsis whitespace-nowrap">{category}</p>
    </div>
  );
};

export default CarouselTile;
