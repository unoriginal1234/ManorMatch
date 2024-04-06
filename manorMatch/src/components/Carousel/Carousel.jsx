import React from 'react';
import CarouselTile from './CarouselTile.jsx';
const Carousel = () => {
  return (
    <div className="flex flex-row">
      // Create a carousel of carouselTile components
      <CarouselTile imageUrl="https://via.placeholder.com/150" />
      <CarouselTile imageUrl="https://via.placeholder.com/150" />
      <CarouselTile imageUrl="https://via.placeholder.com/150" />
    </div>
  );
};

export default Carousel;
