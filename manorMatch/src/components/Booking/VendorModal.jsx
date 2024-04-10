/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";

const VendorModal = ({ selectedVendor, goToNextPage, goToPreviousPage }) => {
  // Add your component logic here
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const [serviceDescription, setServiceDescription] = useState('');
    const [specialties, setSpecialties] = useState([]);

    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
      setServiceDescription(capitalize(selectedVendor.serviceDescription));
      setSpecialties(Object.values(selectedVendor.specialties[0]).filter((specialty) => !/d/.test(specialty)).map((specialty) => capitalize(specialty)));
    }, [selectedVendor]);

    const getListOfSpecialties = () => {
      specialties.slice(0, 4)
      return specialties.map((specialty, index) => {
        return <li key={index}>{specialty}</li>
      })
    }

    const handleClick = () => {
      let currentVendors = JSON.parse(localStorage.getItem('vendors'));
      currentVendors.push(selectedVendor);
      console.log(currentVendors);
      localStorage.setItem('vendors', JSON.stringify(currentVendors));
      goToNextPage();
    }

    return (
      // Add your JSX code here
      <div>
          <div className="text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto">
            <view className="relative w-1/2 h-3/5 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
                <div className="w-full h-full border border-mmsand flex flex-col">
                    {/* <button onClick={() => setModalIsOpen(false)} className="absolute top-9 right-9 bg-mmcream p-1 rounded text-mmblue">X</button> */}
                    <div className="flex">
                      <div className="ml-5 mt-12">
                        <h1 className="text-4xl font-thin whitespace-normal mb-1 border-b">{selectedVendor.name}</h1>
                        <h2 className="text-2xl mt-1 mb-7 font-extralight">{selectedVendor.category}</h2>
                      </div>
                      <button className="bg-mmcream text-mmblue p-2 rounded whitespace-nowrap absolute top-0 right-0 mr-6 mt-6" onClick={() => handleClick()}>Book Now</button>
                    </div>
                <div className="flex items-start">
                  <div className="w-2/5 flex flex-col justify-center items-center">
                    <img src={selectedVendor.photo} alt="Vendor Logo" className="w-4/5 h-3/5 mb-4 border border-mmsand" />
                  </div>
                  <div className="w-3/5 flex flex-col justify-center">
                    <h2 className="text-2xl mb-2 flex-col font-thin">{serviceDescription}</h2>
                    { specialties ? <h2 className="text-xl mb-2 font-extralight">Specialties:</h2> : null }
                    <ul className="list-disc font-extralight ml-6">
                      { getListOfSpecialties() }
                    </ul>
                  </div>
                </div>
                  <div>
                    <button className="bg-mmcream text-mmblue p-2 rounded absolute bottom-0 left-0 mb-9 ml-9" onClick={() => goToPreviousPage()}><FaLongArrowAltLeft /></button>
                  </div>
                </div>
              </view>
          </div>
      </div>
    );
  };

export default VendorModal;