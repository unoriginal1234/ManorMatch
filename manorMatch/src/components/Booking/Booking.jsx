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

const Booking = ({ category, modalIsOpen, setModalIsOpen, currentUser }) => {
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
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleTime = (e) => {
    setTime(e.target.value);
  }

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
                goToNextPage={goToNextPage}
                currentUser={currentUser}/>
            )}
            {addressType === 'select' && (
              <SelectAddress
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                currentUser={currentUser}
              />
            )}
          </div>
        )}
        {modalPage === 3 && (
          <Calendar
            goToPreviousPage={goToPreviousPage}
            setSelectedDate={setSelectedDate}
            setSelectedTime={setSelectedTime}
            goToNextPage={goToNextPage}
            date={date}
            time={time}
            handleDate={handleDate}
            handleTime={handleTime}
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
            currentUser={currentUser}
            date={date}
            time={time}
          />
        )}
        {modalPage === 6 && (
          <Confirmation
            handleClose={handleClose}
            selectedVendor={selectedVendor}
            date={selectedDate}
            time={selectedTime} />
        )}
        <button
          onClick={() => handleClose()}
          className="text-mmcream text-3xl absolute top-48 right-1/4 w-16 h-16 flex justify-center items-center rounded"
        ><MdClose /></button>
      </Modal>
    </div>
  );
};

export default Booking;
