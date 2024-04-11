import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ imageUrl, category, description, serviceDetails }) => {
  return (
    <div className="bg-mmcream p-5 flex flex-col justify-center items-center h-[21rem]">
      <CarouselImage imageUrl={imageUrl} description={description} serviceDetails={serviceDetails} category={category}/>
      <br />
      <p className="text-mmblue text-center text-xs sm:text-sm md:text-lg lg:text-xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap w-11/12">{category}</p>
    </div>
  );
};

export default CarouselTile;
