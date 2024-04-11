import { useState, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

const EnterAddress = ({ goToPreviousPage, address, setAddress, goToNextPage, currentUser }) => {

  const [address1, setAddress1] = useState(address.address1);
  const [address2, setAddress2] = useState(address.address2);
  const [city, setCity] = useState(address.city);
  const [usState, setUsState] = useState(address.usState);
  const [zip, setZip] = useState(address.zip);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (submit) {
      axios.post(`${apiUrl}/address`, { address })
        .then((response) => {
          console.log('Address saved successfuly');
          setSubmit(false);
          goToNextPage();
        })
        .catch((error) => {
          console.log('Error saving address', error);
          setSubmit(false)
        })
    }
  }, [submit, address, goToNextPage])

  const handleClick = () => {
    setAddress({
      userId: currentUser._id,
      address1: address1,
      address2: address2,
      city: city,
      usState: usState,
      zip: zip
    });
    setSubmit(true);
  }

  return (
    <div className="w-full flex flex-col justify-between text-black">
      <div className="text-mmcream text-3xl font-light">Please fill in the address for servicing:</div>
      <div className='flex-col items-center p-16'>
      <div className="flex flex-col">
        <label className="text-mmcream text-2xl font-light">Address 1:</label>
        <input
          placeholder="Address 1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className="pl-2 w-1/2 h-8"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-mmcream text-2xl font-light">Address 2:</label>
        <input
          placeholder="Address 2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className="pl-2 w-1/2 h-8"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-mmcream text-2xl font-light">City:</label>
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="pl-2 w-1/2 h-8"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-mmcream text-2xl font-light">State:</label>
        <input
          placeholder="State"
          value={usState}
          onChange={(e) => setUsState(e.target.value)}
          className="pl-2 w-1/2 h-8"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-mmcream text-2xl font-light">Zip:</label>
        <input
          placeholder="Zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="pl-2 w-1/2 h-8"
        />
      </div>
      </div>
      <div className="flex w-full justify-between text-3xl">
        <button
          onClick={() => goToPreviousPage()}
          className="text-mmcream hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltLeft /></button>
        <button
          onClick={() => handleClick()}
          className="text-mmcream hover:scale-110 transform transition duration-200 ease-in-out"
        ><FaLongArrowAltRight /></button>
      </div>
    </div>
  )
}

export default EnterAddress;