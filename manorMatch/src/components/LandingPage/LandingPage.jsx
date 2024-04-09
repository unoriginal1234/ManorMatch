import Slideshow from './Slideshow.jsx';
import Testimonials from './Testimonials.jsx';
import NavBar from '../../utils/NavBar.jsx'
import ChatStandIn from './ChatStandIn.jsx'
import { Link } from 'react-router-dom'

const LandingPage = () => {

  return (


      <><NavBar>
      <Link to="/login" className="text-lg mx-4">
        Join / Login
      </Link>
    </NavBar><div className="flex flex-col items-center justify-center bg-mmblue">
        <Slideshow />
        <Testimonials />
        <ChatStandIn />
      </div></>
  );
  };

export default LandingPage;