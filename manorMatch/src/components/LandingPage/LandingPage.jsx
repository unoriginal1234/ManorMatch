import Slideshow from './Slideshow.jsx';
import Testimonials from './Testimonials.jsx';
import Mission from './Mission.jsx';
import { Link } from 'react-router-dom'

const LandingPage = () => {

  return (
    <div className="w-full">
      <Link to='/home' className="font-serif absolute z-10 text-mmcream left-20 top-12 font-normal text-5xl">
          M | M
      </Link>
      <Link to="/login">
        <button className="bg-mmblue text-2xl text-white font-bold px-8 py-3 absolute z-10 top-12 right-20 rounded-xl hover:scale-110 duration-200 tracking-wider shadow-landinglogin">Log in</button>
      </Link>
      <div className="flex flex-col items-center justify-center bg-mmblue">
        <Slideshow />
        <Testimonials />
        <Mission />
      </div>
    </div>
  )
};

export default LandingPage;