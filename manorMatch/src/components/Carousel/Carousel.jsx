import React from 'react';
import CarouselTile from './CarouselTile.jsx';
const Carousel = () => {
  return (
    <div className="flex flex-row">
      <CarouselTile imageUrl="https://via.placeholder.com/150" />
      <CarouselTile imageUrl="https://via.placeholder.com/150" />
      <CarouselTile imageUrl="https://via.placeholder.com/150" />
    </div>
  );
};

export default Carousel;
