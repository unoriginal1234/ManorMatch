import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ imageUrl, category, description, serviceDetails, addresses }) => {
  return (
    <div className="bg-mmcream p-5 flex flex-col justify-center items-center h-[21rem]">
      <CarouselImage imageUrl={imageUrl} description={description} serviceDetails={serviceDetails} category={category} addresses={addresses}/>
      <br />
      <p className="text-white text-center text-xs sm:text-sm md:text-lg lg:text-xl font-thin overflow-hidden overflow-ellipsis whitespace-nowrap">{category}</p>
    </div>
  );
};

export default CarouselTile;
