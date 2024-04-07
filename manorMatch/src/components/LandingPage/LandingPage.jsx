import Slideshow from './Slideshow.jsx';
import Testimonials from './Testimonials.jsx';
import NavBar from './NavBar.jsx'


const LandingPage = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <NavBar />
      <Slideshow />
      <Testimonials />
    </div>
  );
  };

export default LandingPage;