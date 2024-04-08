import Modal from 'react-modal';
import { useState } from 'react';
import AddressType from './AddressType';
import EnterAddress from './EnterAddress';
import SelectAddress from './SelectAddress';

const Booking = ({ modalIsOpen, setModalIsOpen }) => {
  const [modalPage, setModalPage] = useState(1);

  const [addressType, setAddressType] = useState('');
  const [address, setAddress] = useState({
    address1: '',
    address2: '',
    city: '',
    usState: '',
    zip: ''
  });

  const goToNextPage = () => {
    setModalPage(modalPage + 1);
  };

  const goToPreviousPage = () => {
    setModalPage(modalPage - 1);
  };

  const handleClose = () => {
    setModalIsOpen();
    setModalPage(1);
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} className="text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {modalPage === 1 && (
          <AddressType
            setAddressType={setAddressType}
            goToNextPage={goToNextPage}
            />
        )}
        {modalPage === 2 && (
          <div>
            <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
            {addressType === 'enter' && (
              <EnterAddress address={address} setAddress={setAddress} goToNextPage={goToNextPage}/>
            )}
            {addressType === 'select' && (
              <SelectAddress goToNextPage={goToNextPage}/>
            )}
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
        <button onClick={() => handleClose()}>X</button>
      </Modal>
    </div>
  );
};

export default Booking;
