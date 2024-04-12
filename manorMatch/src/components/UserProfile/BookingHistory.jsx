const BookingHistory = ({ title, bookings }) => {
  return (
    <div className="p-6 bg-gray-900 w-full flex flex-wrap">

      {bookings.map((booking, i) => {
        const date = new Date(booking.jobDate);
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };
        const formattedTime = `${date.toLocaleTimeString('en-US', timeOptions)}`
        const formattedDate = `${date.toLocaleDateString('en-US', dateOptions)}`;


      return (
        <div key={i} className="w-1/3 bg-grey-900 mb-5 mt-5">
          <div className="flex flex-col items-center bg-mmcream rounded-lg shadow-md h-full text-mmblue w-4/5">
            <h2 className="text-l font-semibold">{formattedTime}</h2>
            <h2 className="text-xl font-semibold mb-2">{formattedDate}</h2>
            <ul>
              {booking.services.map((service, j) => (
                <li key={j} className="flex">
                  <div className="w-1/2">
                  <img className="w-15 h-15 ml-4 mb-2 mr-2 rounded" src={service.vendorPhoto} alt="vendor" />
                  </div>
                  <div className="flex items-center justify-center flex-col ml-5 mb-5">
                  <h3 className="text-xl flex justify-center w-full font-bold">{service.vendorName}</h3>
                  <p className="flex justify-center w-full">{service.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )})}
  </div>

  );
}

export default BookingHistory;