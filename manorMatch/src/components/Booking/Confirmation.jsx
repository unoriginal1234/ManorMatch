

const Confirmation = ({ date, time}) => {

  return (
    <div>
      <div>Your reservation has been added to the cart!</div>
      <div>Details:</div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  )
}

export default Confirmation;