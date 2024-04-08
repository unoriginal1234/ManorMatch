import { useState } from 'react';
import axios from 'axios';

const Vendors = ({ setSelectedVendor }) => {

  // populate vendors
  // give each an onclick func
  // update state with selected vendor

  const [vendors, setVendors] = useState([]);

  axios.get('http://localhost:3000/vendors', {
    params: {
      category: 'Personal Chef'
    }
  })
    .then((response) => {
    // setModalIsOpen(true);
    setVendors(response.data);

  })
  .catch((error) => {
    console.log(error);
  })

  // on hover of photo set border

  return (
    <div>
        list of vendors

        <button>Vendor Info</button>
    </div>
  )
}

export default Vendors;