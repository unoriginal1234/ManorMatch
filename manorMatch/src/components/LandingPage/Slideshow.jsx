import { useState, useEffect } from 'react';
// import image1 from './images/image1.jpg'
// import image2 from './images/image2.jpg'
// import image3 from './images/image3.jpg'
import mansion1 from './videos/mansion1.mp4';
import mansion2 from './videos/mansion2.mp4';
import mansion3 from './videos/mansion3.mp4';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";



const Slideshow = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // useEffect(()=> setSlideShow, [])

  const videos = [
    mansion1,
    mansion2,
    mansion3,
    // Add more image paths here
  ];

  // const setSlideShow = () => {
  //   return setInterval(()=> nextVideo(), 8000);
  // }

  const nextVideo = () => {
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    // Add fade transition class to the video element
  };

  const previousVideo = () => {
    setCurrentVideo((prevVideo) => (prevVideo - 1 + videos.length) % videos.length);
  };

  return (
    <div className="w-screen">
      <video src={videos[currentVideo]} alt="Mansion Video" autoPlay muted loop controls className="w-screen" />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
        <button onClick={previousVideo} className="text-mmblue text-4xl"><FaArrowAltCircleLeft /></button>
        <button onClick={nextVideo} className="text-mmblue text-4xl"><FaArrowAltCircleRight /></button>
      </div>
    </div>
  );
};

export default Slideshow;