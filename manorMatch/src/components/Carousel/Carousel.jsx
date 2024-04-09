import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselTile from './CarouselTile.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-next !bg-black !right-1 z-20" onClick={onClick} />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-prev !bg-black !left-2 z-20" onClick={onClick} />
  );
}

const Carousel = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
  axios.get('http://localhost:3000/services')
  .then((response) => {
    setServiceData(response.data);
    console.log(response.data);
  });

  }, []);
  const settings = {
    dots: true,
    //customPaging: (i) => <div className="dot">{i + 1}</div>,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    rows:2,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
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
    <Slider className="relative px-10" {...settings}>
       {serviceData.map((service) => {
         return (
           <div key={service._id} className="p-1">
             <CarouselTile imageUrl={service.photo} category={service.category} description={service.description} serviceDetails={service.serviceDetails} />
           </div>
         );
       })}
    </Slider>
  );
};

export default Carousel;
