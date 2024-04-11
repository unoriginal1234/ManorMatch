import Slideshow from './Slideshow.jsx';
import Testimonials from './Testimonials.jsx';
import Mission from './Mission.jsx';
import Services from './Services.jsx';
import Footer from './Footer.jsx';

import { Link } from 'react-router-dom'

const LandingPage = () => {

  return (
    <div className="w-full flex flex-col items-center">
      <Link to='/home' className="font-serif absolute z-10 text-mmcream left-20 top-12 font-normal text-5xl text-outline">
          M | M
      </Link>
      <Link to="/login">
        <button className="bg-mmblue text-2xl text-white font-bold px-8 py-3 absolute z-10 top-12 right-20 rounded-xl hover:scale-110 duration-200 tracking-wider shadow-landinglogin">Log in</button>
      </Link>
      <Slideshow />
      <Testimonials />
      <Mission />
      <div className="bg-mmcream h-40 w-full relative bottom-32"></div>
      <Services />
      <Footer />
    </div>
  )
};

export default LandingPage;