import { useState } from 'react';

const EnterAddress = ({ goToPreviousPage, address, setAddress, goToNextPage }) => {

  const [address1, setAddress1] = useState(address.address1);
  const [address2, setAddress2] = useState(address.address2);
  const [city, setCity] = useState(address.city);
  const [usState, setUsState] = useState(address.usState);
  const [zip, setZip] = useState(address.zip);

  const handleClick = () => {
    setAddress({
      address1: address1,
      address2: address2,
      city: city,
      usState: usState,
      zip: zip
    });
    goToNextPage();
  }

  return (
    <div>
      <button onClick={() => goToPreviousPage()}>PREVIOUS</button>
      <form className="text-black">
        <input
          placeholder="Address 1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className="pl-2"
        />
        <input
          placeholder="Address 2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className="pl-2"
        />
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="pl-2"
        />
        <input
          placeholder="State"
          value={usState}
          onChange={(e) => setUsState(e.target.value)}
          className="pl-2"
        />
        <input
          placeholder="Zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="pl-2"
        />
      </form>
      <button onClick={() => handleClick()}>NEXT</button>
    </div>
  )
}

export default EnterAddress;