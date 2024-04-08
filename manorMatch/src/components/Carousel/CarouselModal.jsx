import Modal from "react-modal";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselModal = ({ modalIsOpen, closeModal }) => {
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
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      >
        <div className='relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex'>
          <div className='w-full h-full border border-mmsand flex'>
            <button
              onClick={() => handleClose()}
              className='absolute top-9 right-9 bg-mmcream p-1 rounded text-mmblue'
            >
              X
            </button>

            <div className='w-7/12 flex-col my-4 ml-4'>
              <div className='w-fill'>
                <h1 className='text-4xl mb-5'>Service Name</h1>
              </div>
              <div>
                <h2 className='text-2xl mb-2'>Details</h2>
              </div>
              <ul className='list-disc list-inside'></ul>
            </div>
            <div className='serviceModal w-5/12 flex flex-col justify-center pl-10 m-10'>
              <Slider {...settings}>
                <img
                  src='https://fakeimg.pl/250x250/b8a0a0/909090'
                  alt='Service Image'
                />
                <img
                  src='https://fakeimg.pl/250x250/b84d4d/909090'
                  alt='Service Image'
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
