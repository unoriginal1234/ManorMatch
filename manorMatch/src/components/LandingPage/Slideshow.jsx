import { useState } from 'react';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    // Add more image paths here
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div style={{ maxWidth: '1080px' }}>
      <img src={images[currentImage]} alt="Slideshow Image" style={{ maxWidth: '640px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;