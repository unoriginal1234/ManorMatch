import { useState, useEffect } from 'react';

const Testimonials = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(()=> startTestimonials, [])

  const landingTestimonials = [
    {quote: 'I do declare this is the best thing ever', source: 'Sir Bool'},
    {quote: "I'm a cutie pie", source: "Anonymous"},
    {quote: 'My pool is sparkling!', source: "Andre SoCal"},
    {quote: 'I do declare!', source: "Zacharia Dorito"}
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % landingTestimonials.length);

  }

  const startTestimonials = () => {
    return setInterval(()=> nextTestimonial(), 4000);
  }

  return (
    <div className="bg-mmblue text-mmsand p-4 w-screen text-center">
      <p className="text-3xl font-bold">
        {landingTestimonials[currentTestimonial].quote}
      </p>
      <p className="text-xl">
        -{landingTestimonials[currentTestimonial].source}
      </p>
    </div>
  );
};

export default Testimonials;