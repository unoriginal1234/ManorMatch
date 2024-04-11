import Modal from 'react-modal';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdClose } from "react-icons/md";
const CarouselModal = ({ modalIsOpen, closeModal, serviceDetails, imageUrl, category }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  function handleClose() {
    closeModal();
  }
  function format(str) {
    let result = str;
    result = result.charAt(0).toUpperCase() + result.slice(1);
    result += '.';
    return result;
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="text-mmcream fixed inset-0 flex items-center justify-center outline-none overflow-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="relative w-8/12 h-fit bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
          <div className="w-full h-full border border-mmsand flex">
            <button
              onClick={() => handleClose()}
              className="absolute top-6 right-6 p-1 rounded text-3xl text-mmcream"
            >
              < MdClose />
            </button>

            <div className="w-7/12 flex-col my-4 ml-4">
              <div className="w-fill">
                <h1 className="text-4xl mb-5 font-serif">{category.toUpperCase()}</h1>
              </div>
              <div>
                <ul className="list-disc pl-4">
                <h2 className="text-2xl mb-2 break-word font-thin">{Object.keys(serviceDetails).map((k)=>{
                  return <li key={k}>{format(serviceDetails[k])}</li>
                })}</h2></ul>
              </div>
              <ul className="list-disc list-inside"></ul>
            </div>
            <div className="serviceModal w-5/12 flex flex-col justify-center pl-10 m-10">
              <Slider {...settings}>
                <img
                  src={imageUrl}
                  alt="Service Image"
                />
                 <img
                  src={imageUrl}
                  alt="Service Image"
                />
                 <img
                  src={imageUrl}
                  alt="Service Image"
                />
              </Slider>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CarouselModal;
