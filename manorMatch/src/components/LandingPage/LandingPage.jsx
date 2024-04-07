import Slideshow from './Slideshow.jsx';
import Testimonials from './Testimonials.jsx';
import NavBar from './NavBar.jsx'
import ChatStandIn from './ChatStandIn.jsx'


const LandingPage = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-mmblue">
      <NavBar />
      <Slideshow />
      <Testimonials />
      <ChatStandIn />
    </div>
  );
  };

export default LandingPage;