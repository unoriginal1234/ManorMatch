import axios from 'axios';
import { useState, useEffect } from 'react';
// import { FaDiamond } from "react-icons/fa6";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/services`)
    .then((response) => {

      console.log(response.data);
      setServices(response.data.sort((a, b) => a.category.localeCompare(b.category)));
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, []);

  return (
    <div className="bg-white w-full text-mmgrey font-bold flex flex-col items-center justify-center relative bottom-32 pt-32 font-serif font-light px-20">
      <div className="text-4xl pb-8">SERVICES</div>
      <div className="text-4xl space-x-4 text-center tracking-widest leading-loose">
        {services.map((service, index) => {
          return (index !== services.length - 1) ?
          (
            <>
              <span key={service._id}>{service.category}</span>
              <span className="px-2">|</span>
              {/* <FaDiamond /> */}
            </>
          )
          :
          (
            <span key={service._id}>{service.category}</span>
          )
        })}
      </div>
  </div>
  )
}

export default Services;