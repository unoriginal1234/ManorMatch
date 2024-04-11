import { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const Slideshow = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    'https://player.vimeo.com/video/933085371?h=ef78733eac',
    'https://player.vimeo.com/video/933087071?h=4416ce88f1',
    'https://player.vimeo.com/video/933086488?h=4732f26306',
    'https://player.vimeo.com/video/931827424?h=d6687b2975'
  ];

  const nextVideo = () => {
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    // Add fade transition class to the video element
  };

  const previousVideo = () => {
    setCurrentVideo((prevVideo) => (prevVideo - 1 + videos.length) % videos.length);
  };

  return (
    <div className="w-full bg-mmblue">

      <div style={{"position":"absolute","top":"50%","left":"50%","transform":"translate(-50%, -50%)"}}>
        <div className="animate-bounce text-center text-mmcream text-8xl -z-9 font-serif">M | M</div>
      </div>

      <div className="z-1" style={{"padding":"56.25% 0 0 0","position":"relative"}}>
        <iframe src={`${videos[currentVideo]}&background=1&autoplay=1&loop=1&autopause=0?&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{"position":"absolute","top":"-5%","left":"0","width":"100%","height":"100%"}} title="mansion1"></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
        <button onClick={previousVideo} className="text-mmblue text-4xl">
          <div className="text-white relative left-4 hover:scale-150 duration-200">
            <MdArrowBackIosNew />
          </div>
        </button>
        <button onClick={nextVideo} className="text-mmblue text-4xl">
          <div className="text-white relative right-4 hover:scale-150 duration-200">
            <MdArrowForwardIos />
          </div>
        </button>

      </div>
    </div>
  );
};

export default Slideshow;