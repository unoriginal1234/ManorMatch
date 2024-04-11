import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ imageUrl, category, description, serviceDetails, currentUser }) => {
  return (
    <div className="bg-mmcream px-4 pt-0 pb-5 flex flex-col justify-center items-center h-[37rem] rounded-lg" style={{maxWidth: '20rem'}}>
      <CarouselImage imageUrl={imageUrl} description={description} serviceDetails={serviceDetails} category={category} currentUser={currentUser}/>
      <br />
      <p className="text-mmblue text-center font-serif text-[29px]  overflow-hidden overflow-ellipsis whitespace-nowrap w-11/12">{category}</p>
    </div>
  );
};

export default CarouselTile;
