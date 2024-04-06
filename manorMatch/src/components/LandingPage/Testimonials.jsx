import { useState } from 'react';

const Testimonials = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const landingTestimonials = [
    {quote: 'I do declare this is the best thing ever', source: 'Sir Bool'},
    {quote: "I'm a cutie pie", source: "Anonymous"}
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % landingTestimonials.length)
  }

  return (
    <div className="bg-mmblue text-mmsand p-4 w-screen text-right">
      <p className="text-2xl font-bold">{landingTestimonials[currentTestimonial].quote}</p>
      <p>-{landingTestimonials[currentTestimonial].source}</p>
      <button onClick={nextTestimonial}>Next</button>
    </div>
  );
};

export default Testimonials;