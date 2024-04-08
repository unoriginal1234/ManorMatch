import React from 'react';
import CarouselTile from './CarouselTile.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/*
const NextArrow = ({ onClick }) => (
  <div
    className="slick-prev left-5 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    Next
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div
    className="slick-next right-0 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    Prev
  </div>
);*/

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
  const settings = {
    dots: true,
    //customPaging: (i) => <div className="dot">{i + 1}</div>,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      // You can add more responsive settings
    ],
  };
  return (
    <Slider className="relative px-10" {...settings}>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b84d4d/909090" />
      </div>
      <div className="p-1">
        <CarouselTile imageUrl="https://fakeimg.pl/200x250/b8a0a0/909090" />
      </div>
    </Slider>
  );
};

export default Carousel;
