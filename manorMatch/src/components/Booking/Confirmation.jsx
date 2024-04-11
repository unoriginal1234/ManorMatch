import { Link } from 'react-router-dom';

const Confirmation = ({ handleClose, selectedVendor, date, time}) => {

  return (
    <div className="bg-mmblue w-1/2 h-3/5 text-center text-xl border-2 border-white-500">
  <div className="text-4xl py-4">Your reservation has been added to the cart!</div>
  <div className="text-2xl py-3">Details:</div>
  <div className="text-xl py-4">{selectedVendor.category}</div>
  <div className="text-2xl py-2">{selectedVendor.name}</div>
  <div className="font-bold text-2xl py-1">{date}</div>
  <div className="font-bold text-2xl py-1">{time}</div>
  <button
    className="bg-mmcream text-mmblue px-3"
    onClick={() => handleClose()}
  >Add More Services</button>
  <Link to='/cart'>
    <button className="bg-mmcream text-mmblue px-3">View Cart</button>
  </Link>
</div>
  )
}

export default Confirmation;