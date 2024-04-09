import { useState } from 'react';

const SelectAddress = ({ goToPreviousPage, goToNextPage }) => {

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleClick = () => {
    if (selectedAddress !== null && selectedAddress !== 'Select Address') {
      goToNextPage();
    }
  }

  return (
    <div>
      <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
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