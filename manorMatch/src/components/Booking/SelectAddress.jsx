import { useState } from 'react';

const SelectAddress = ({ goToNextPage }) => {

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleClick = () => {
    if (selectedAddress !== null && selectedAddress !== 'Select Address') {
      goToNextPage();
    }
  }

  return (
    <div className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
      SELECT FROM YOUR SAVED ADDRESSES:
      <select
        onChange={(e) => setSelectedAddress(e.target.value)}
        className="text-black">
        <option value='Select Address'>Select Address</option>
        <option value="address1">123 Main St</option>
        <option value="address2">456 Elm St</option>
        <option value="address3">789 Oak St</option>
      </select>
      <button onClick={handleClick}>NEXT</button>
    </div>
  )
}

export default SelectAddress;