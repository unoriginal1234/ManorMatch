import React from 'react';
import CarouselImage from './CarouselImage';
const CarouselTile = ({ vendors, setVendors, imageUrl, category, description, serviceDetails }) => {
  return (
    <div className="bg-mmblue p-6 flex flex-col justify-center items-center">
      <CarouselImage vendors={vendors} setVendors={setVendors} imageUrl={imageUrl} description={description} serviceDetails={serviceDetails} category={category}/>
      <br />
      <p className="text-white text-center text-3xl">{category}</p>
    </div>
  );
};

export default CarouselTile;
