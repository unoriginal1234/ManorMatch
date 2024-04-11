import { useState, useEffect } from 'react';

const Testimonials = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [ moveLeft, setMoveLeft ] = useState(true)

  useEffect(()=> {
    startTestimonials()
  }, [])
  useEffect(()=> {
    startTestimonialAnimation()
  }, [])

  const landingTestimonials = [
    {quote: 'I do declare this is the best thing ever', source: 'Sir Bool'},
    {quote: "Exceptional property management", source: "Anonymous"},
    {quote: 'My pool is sparkling!', source: "Andre SoCal"},
    {quote: 'I live a most extraordinary existence!', source: "Zacharia Dorito"}
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % landingTestimonials.length);
  }

  const startTestimonials = () => {
    return setInterval(()=> {
      nextTestimonial()}
      , 4000);
  }

  const startTestimonialAnimation = () => {
    return setInterval(()=> {
      setMoveLeft((prevMoveLeft) => !prevMoveLeft);
    }, 4000)
  }

  return (
    <div className="relative bottom-40"><div className="bg-mmblue h-24"></div>
      <div className="bg-mmblue text-mmcream w-screen">
      <p className={`text-3xl font-bold text-center ${moveLeft ? 'transition-transform duration-3000 translate-x-[-25%]' : 'transition-transform duration-3000 translate-x-[25%]'}`}>
        {landingTestimonials[currentTestimonial].quote}
      </p>
      <p className={`text-xl text-center ${moveLeft ? 'transition-transform duration-3000 translate-x-[-25%]' : 'transition-transform duration-3000 translate-x-[25%]'}`}>
        -{landingTestimonials[currentTestimonial].source}
      </p>
    </div>
   </div>
  );
};

export default Testimonials;