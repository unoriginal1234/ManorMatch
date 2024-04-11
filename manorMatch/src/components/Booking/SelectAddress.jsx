import { useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SelectAddress = ({ goToPreviousPage, goToNextPage, addresses }) => {

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleClick = () => {
    if (selectedAddress !== null && selectedAddress !== 'Select Address') {
      goToNextPage();
    }
  }

  return (
    <div className="w-full flex flex-col justify-between items-center p-8 text-3xl">
      Select from saved addresses:
      <select
        onChange={(e) => setSelectedAddress(e.target.value)}
        className="text-black w-3/5 h-1/8 text-m">
        <option value='Select Address'><span>Select Address</span></option>
        {addresses.length > 0 ? addresses.map((address, index) => {
          return (
            <option key={index} value={address._id}>
              {address.address1}, {address.city}, {address.state}
            </option>
          )
        }) : <option value='No Addresses'>No Saved Addresses</option>}
      </select>
      <div className="flex w-full justify-between text-3xl">
        <button
          onClick={() => goToPreviousPage()}
          className="hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltLeft /></button>
        <button
          onClick={() => handleClick()}
          className="hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltRight /></button>
      </div>
    </div>
  )
}

export default SelectAddress;