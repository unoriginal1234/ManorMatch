import { useState } from 'react';

const SelectAddress = ({ goToNextPage }) => {

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleClick = () => {
    if (selectedAddress) {
      goToNextPage();
    }
  }

  return (
    <div>
      SELECT FROM YOUR SAVED ADDRESSES:
      <select onChange={(e) => setSelectedAddress(e.target.value)}>
        <option value="address1">123 Main St</option>
        <option value="address2">456 Elm St</option>
        <option value="address3">789 Oak St</option>
      </select>
      <button onClick={handleClick}>NEXT</button>
    </div>
  )
}

export default SelectAddress;