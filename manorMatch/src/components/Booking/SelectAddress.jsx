import { useState, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

const SelectAddress = ({ goToPreviousPage, goToNextPage, currentUser }) => {

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState(null);

  const handleClick = () => {
    if (selectedAddress !== null && selectedAddress !== 'Select Address' && selectedAddress !== 'No Addresses') {
      goToNextPage();
    }
  }

  const getAddresses = (id) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/addresses`, {
      params: {
        userId: id
    }})
    .then((response) => {
      const addresses = response.data;
      setAddresses(addresses);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  useEffect(() => {
    getAddresses(currentUser._id);
  }, [currentUser._id]);

  return (
    <div className="font-thin w-full flex flex-col justify-between items-center p-8 text-3xl">
      Select from saved addresses:
      <select
        onChange={(e) => setSelectedAddress(e.target.value)}
        className="text-black w-3/5 h-1/8 text-m">
        <option value='Select Address'><span>Select Address</span></option>
        {addresses ? addresses.map((address, index) => {
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