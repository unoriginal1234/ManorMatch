import Modal from 'react-modal';
import { useState } from 'react';
import AddressType from './AddressType';
import EnterAddress from './EnterAddress';
import SelectAddress from './SelectAddress';
import Calendar from './Calendar';
import Vendors from './Vendors';
import VendorModal from './VendorModal';
import Confirmation from './Confirmation';
import { MdClose } from "react-icons/md";

const Booking = ({ category, modalIsOpen, setModalIsOpen }) => {
  // will need category passed down from carousel
  const [modalPage, setModalPage] = useState(1);

  const [addressType, setAddressType] = useState('');
  const [address, setAddress] = useState({
    address1: '',
    address2: '',
    city: '',
    usState: '',
    zip: ''
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState({});

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
      <Modal isOpen={modalIsOpen} className="text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto" overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        {modalPage === 1 && (
          <AddressType
            setAddressType={setAddressType}
            goToNextPage={goToNextPage}
            />
        )}
        {modalPage === 2 && (
          <div className="relative w-1/2 h-3/5 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
            {addressType === 'enter' && (
              <EnterAddress
                goToPreviousPage={goToPreviousPage}
                address={address}
                setAddress={setAddress}
                goToNextPage={goToNextPage}/>
            )}
            {addressType === 'select' && (
              <SelectAddress
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage} />
            )}
          </div>
        )}
        {modalPage === 3 && (
          <Calendar
            goToPreviousPage={goToPreviousPage}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            goToNextPage={goToNextPage}
          />
        )}
        {modalPage === 4 && (
          <Vendors
            selectedCategory={category}
            goToPreviousPage={goToPreviousPage}
            setSelectedVendor={setSelectedVendor}
            goToNextPage={goToNextPage}
          />
        )}
        {modalPage === 5 && (
          <VendorModal
            selectedVendor={selectedVendor}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
          />
        )}
        {modalPage === 6 && (
          <Confirmation
            selectedVendor={selectedVendor}
            date={selectedDate}
            time={selectedTime} />
        )}
        <button
          onClick={() => handleClose()}
          className="bg-white text-black text-3xl absolute top-40 right-1/4 w-16 h-16 flex justify-center items-center rounded"
        ><MdClose /></button>
      </Modal>
    </div>
  );
};

export default Booking;
