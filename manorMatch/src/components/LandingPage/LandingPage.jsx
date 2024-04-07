import Slideshow from './Slideshow.jsx';
import Testimonials from './Testimonials.jsx';
import NavBar from './NavBar.jsx'
import AnimationTest from './AnimationTest.jsx'


const LandingPage = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <NavBar />
      <Slideshow />
      <Testimonials />
      <AnimationTest />
    </div>
  );
  };

export default LandingPage;