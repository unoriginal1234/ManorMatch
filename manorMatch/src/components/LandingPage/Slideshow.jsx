import { useState } from 'react';
// import image1 from './images/image1.jpg'
// import image2 from './images/image2.jpg'
// import image3 from './images/image3.jpg'
// import mansion1 from './videos/mansion1.mp4';
// import mansion2 from './videos/mansion2.mp4';
// import mansion3 from './videos/mansion3.mp4';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";



const Slideshow = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // useEffect(()=> setSlideShow, [])

  const videos = [
    'https://player.vimeo.com/video/931817570?h=e6bfb9232f',
    'https://player.vimeo.com/video/931827424?h=d6687b2975',
    // mansion3,
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

  //<video src={videos[currentVideo]} alt="Mansion Video" autoPlay muted loop controls className="w-screen" />


  return (
    <div className="w-screen">

      <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%, -50%)"}}>
        <div className="animate-bounce text-center text-mmcream text-8xl -z-9 font-serif">M | M</div>
      </div>

      <div className="z-1" style={{"padding":"56.25% 0 0 0","position":"relative"}}>
        <iframe src={`${videos[currentVideo]}&background=1&autoplay=1&loop=1&autopause=0?&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"}} title="mansion1"></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
        <button onClick={previousVideo} className="text-mmblue text-4xl">
          <div className="bg-mmcream rounded-full p-1 transition-opacity duration-300 opacity-15 hover:opacity-100">
            <FaArrowAltCircleLeft />
          </div>
        </button>
        <button onClick={nextVideo} className="text-mmblue text-4xl">
          <div className="bg-mmcream rounded-full p-1 transition-opacity duration-300 opacity-15 hover:opacity-100">
            <FaArrowAltCircleRight />
          </div>
        </button>

      </div>
    </div>
  );
};

export default Slideshow;