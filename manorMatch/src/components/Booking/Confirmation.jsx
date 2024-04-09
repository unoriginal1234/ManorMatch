import { Link } from 'react-router-dom';

const Confirmation = ({ handleClose, selectedVendor, date, time}) => {

  return (
    <div className="bg-mmblue w-1/2 h-3/5">
      <div>Your reservation has been added to the cart!</div>
      <div>Details:</div>
      <div>{selectedVendor.category}</div>
      <div>{selectedVendor.name}</div>
      <div>{date}</div>
      <div>{time}</div>
      <button
        className="bg-mmcream text-mmblue"
        onClick={() => handleClose()}
      >Add More Services</button>
      <Link to='/cart'>
        <button className="bg-mmcream text-mmblue">View Cart</button>
      </Link>
    </div>
  )
}

export default Confirmation;