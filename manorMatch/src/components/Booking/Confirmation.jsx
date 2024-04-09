

const Confirmation = ({ selectedVendor, date, time}) => {

  return (
    <div>
      <div>Your reservation has been added to the cart!</div>
      <div>Details:</div>
      <div>{selectedVendor.category}</div>
      <div>{selectedVendor.name}</div>
      <div>{date}</div>
      <div>{time}</div>
      <button>Add More Services</button>
      <button>Checkout</button>
    </div>
  )
}

export default Confirmation;