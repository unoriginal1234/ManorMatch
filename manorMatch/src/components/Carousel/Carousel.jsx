import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselTile from './CarouselTile.jsx';
import Slider from 'react-slick';
const apiUrl = import.meta.env.VITE_API_URL;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import './pageAllignOverride.css';
function NextArrow({ className, style, onClick } ) {
  return (
    <div className="absolute top-1/2 left-0 w-full flex-col justify-between origin-center">
    <MdArrowForwardIos
      className={`${className} h-10 w-10 text-white hover:scale-150 hover:-translate-y-5  duration-200`}
      style={{ ...style, display: "block", color: "white"}}
      onClick={onClick}
      /></div>


  );
}

function PrevArrow({className, style, onClick}) {
   {/*<div className="slick-prev !bg-red-500 !left-2 z-20 rounded-3xl" onClick={onClick} />*/}
  return (
     <div className="absolute top-1/2 left-0 w-full flex-col justify-between origin-center">
      <MdArrowBackIosNew
      className={`${className} h-10 w-10 text-white  hover:scale-150  hover:-translate-y-5 duration-200 origin-center`}
      style={{ ...style, display: "flex", color: "white" }}
      onClick={onClick}
      />
    </div>

  )
}

const Carousel = ({ addresses, currentUser }) => {
  const [serviceData, setServiceData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
  axios.get(`${apiUrl}/services`)
  .then((response) => {
    setServiceData(response.data);
  });

  }, []);
  //style={{ color: i === currentSlide ? 'white' : 'grey' }
const handlePageChange = (current) => {
  const currentPage = Math.ceil(current / settings.slidesToShow);
  console.log(currentPage);
  setCurrentSlide(currentPage);
}
  const settings = {
    dots: true,
  afterChange: (current) => {handlePageChange(current)},
  customPaging: (i) => (
    <div className={i === currentSlide ? "text-white text-3xl my-10 mt-4" : "text-gray-500 text-2xl my-10 mt-4"}>
      {i + 1}
    </div>
  ),

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      // You can add more responsive settings
    ],
  };
  //category, description, serviceDetails
  return (
    <div className='px-16'>
    <Slider className="relative px-10" {...settings}>
       {serviceData.map((service) => {
         return (
           <div key={service._id} className="px-[2rem] py-[1rem]">
             <CarouselTile imageUrl={service.photo} category={service.category} description={service.description} serviceDetails={service.serviceDetails} addresses={addresses} currentUser={currentUser}/>
           </div>
         );
       })}
    </Slider>
    </div>
  );
};

export default Carousel;
