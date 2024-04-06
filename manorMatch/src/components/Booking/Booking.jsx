import Modal from 'react-modal';
import { useState } from 'react';
import AddressType from './AddressType';
import EnterAddress from './EnterAddress';
import SelectAddress from './SelectAddress';

const Booking = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPage, setModalPage] = useState(1);

  const [addressType, setAddressType] = useState('');
  const [address, setAddress] = useState({});

  const goToNextPage = () => {
    setModalPage(modalPage + 1);
  };

  const goToPreviousPage = () => {
    setModalPage(modalPage - 1);
  }

  const handleClose = () => {
    setModalIsOpen(false)
    setModalPage(1)
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>BOOK NOW</button>
      This is Calendar Booking
      <Modal isOpen={modalIsOpen}>
        {modalPage === 1 && (
          <AddressType setAddressType={setAddressType} goToNextPage={goToNextPage}/>
        )}
        {modalPage === 2 && (
          <div>
            <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
            {addressType === 'enter' && (
              <EnterAddress />
            )}
            {addressType === 'select' && (
              <SelectAddress />
            )}
            <button onClick={() => goToNextPage()}>NEXT</button>
          </div>
        )}
        {modalPage === 3 && (
          <div>
            <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
            <div>CALENDAR</div>
            <button onClick={() => goToNextPage()}>NEXT</button>
          </div>
        )}
        {modalPage === 4 && (
          <div>
            <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
            <div>VENDORS</div>
            <button onClick={() => goToNextPage()}>NEXT</button>
          </div>
        )}
        {modalPage === 5 && (
          <div>
            <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
            <div>CONFIRMATION</div>
          </div>
        )}
        <button onClick={() => handleClose()}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Booking;