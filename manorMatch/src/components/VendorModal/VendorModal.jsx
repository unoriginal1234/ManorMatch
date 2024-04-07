import Modal from 'react-modal';
import { useState } from 'react';


const VendorModal = () => {
  // Add your component logic here
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    // Add your JSX code here
    <div>
    <button onClick={() => setModalIsOpen(true)}>Vendor Modal Stub</button>

        <Modal isOpen={modalIsOpen} className="text-mmcream font-serif fixed inset-0 flex items-center justify-center outline-none overflow-auto" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <view className="relative w-1/2 h-1/2 bg-mmblue p-6 rounded shadow-lg h-quto mx-auto flex">
              <div className="w-full h-full border border-mmsand flex">
              <button onClick={() => setModalIsOpen(false)} className="absolute top-9 right-9 bg-mmcream p-1 rounded text-mmblue">X</button>
                <div className="w-2/5 flex flex-col justify-center pl-10">
                  <h1 className="text-4xl mb-5">Vendor Name</h1>
                  <img src="https://via.placeholder.com/150" alt="Vendor Logo" className="w-4/5 h-3/5 mb-4" />
                </div>
                <div className="w-3/5 flex flex-col justify-center mb-10">
                  <h2 className="text-2xl mb-2">Summary</h2>
                  <h2 className="text-2xl mb-2">Specialties:</h2>
                  <ul className="list-disc list-inside">
                    <li>Specialty 1</li>
                    <li>Specialty 2</li>
                    <li>Specialty 3</li>
                    <li>Specialty 4</li>
                  </ul>
                </div>
              </div>
            </view>
        </Modal>
    </div>
  );
};

export default VendorModal;