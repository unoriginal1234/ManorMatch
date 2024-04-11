const BookingHistory = ({ title, bookings }) => {
  return (
    <div className="w-1/2">
    <h2 className="text-center my-4">{title}</h2>
    <div>
      {bookings.map((booking, i) => {
        const date = new Date(booking.jobDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);


      return (
        <div key={i}>
          <h3>{formattedDate}</h3>
          <h4>Services:</h4>
          <ul>
            {booking.services.map((service, j) => (
              <li key={j}>
                <img src={service.vendorPhoto} alt="vendor" />
                <p>{service.vendorName}</p>
              </li>
            ))}
          </ul>
        </div>
      )})}
    </div>
  </div>

  );
}

export default BookingHistory;