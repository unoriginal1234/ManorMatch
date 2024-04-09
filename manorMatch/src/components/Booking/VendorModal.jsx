/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

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
            <view className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
                <div className="w-full h-full border border-mmsand flex">
                {/* <button onClick={() => setModalIsOpen(false)} className="absolute top-9 right-9 bg-mmcream p-1 rounded text-mmblue">X</button> */}
                  <div className="w-2/5 flex flex-col justify-center pl-10">
                    <h1 className="text-4xl">{selectedVendor.name}</h1>
                    <h2 className="text-2xl mb-2">{selectedVendor.category}</h2>
                    <img src={selectedVendor.photo} alt="Vendor Logo" className="w-4/5 h-3/5 mb-4" />
                  </div>
                  <div className="w-3/5 flex flex-col justify-center mb-10">
                    <h2 className="text-2xl mb-2">{serviceDescription}</h2>
                    <h2 className="text-2xl mb-2">Specialties:</h2>
                    <ul className="list-disc list-inside">
                      {getListOfSpecialties()}
                    </ul>
                  </div>
                  <div>
                    <button className="bg-mmcream text-mmblue p-2 rounded" onClick={() => handleClick()}>Book Now</button>
                    <button className="bg-mmcream text-mmblue p-2 rounded" onClick={() => goToPreviousPage()}>Back</button>
                  </div>
                </div>
              </view>
          </div>
      </div>
    );
  };

export default VendorModal;