import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ imageUrl, category, description, serviceDetails }) => {
  return (
    <div className="bg-mmcream px-4 pt-0 pb-5 flex flex-col justify-center items-center h-[37rem] rounded-lg" style={{maxWidth: '20rem'}}>
      <CarouselImage imageUrl={imageUrl} description={description} serviceDetails={serviceDetails} category={category}/>
      <br />
      <p className="text-mmblue text-center font-semibold text-2xl overflow-hidden overflow-ellipsis whitespace-nowrap w-11/12">{category}</p>
    </div>
  );
};

export default CarouselTile;
