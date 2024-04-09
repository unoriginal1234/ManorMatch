

const Confirmation = ({ date, time}) => {

  return (
    <div>
      <div>Your reservation has been added to the cart!</div>
      <div>Details:</div>
      <div>SERVICE NAME HERE</div>
      <div>VENDOR NAME HERE</div>
      <div>{date}</div>
      <div>{time}</div>
      <button>Add More Services</button>
      <button>Checkout</button>
    </div>
  )
}

export default Confirmation;