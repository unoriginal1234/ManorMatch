

const Confirmation = ({ selectedVendor, date, time}) => {

  return (
    <div className="bg-mmblue w-1/2 h-3/5">
      <div>Your reservation has been added to the cart!</div>
      <div>Details:</div>
      <div>{selectedVendor.category}</div>
      <div>{selectedVendor.name}</div>
      <div>{date}</div>
      <div>{time}</div>
      <button className="bg-mmcream text-mmblue">Add More Services</button>
      <button className="bg-mmcream text-mmblue">Checkout</button>
    </div>
  )
}

export default Confirmation;