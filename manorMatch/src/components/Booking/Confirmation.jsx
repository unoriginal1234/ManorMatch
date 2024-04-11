import { Link } from 'react-router-dom';
import  CartIcon  from '../ShoppingCart/icons/CartIcon.jsx';

const Confirmation = ({ handleClose, selectedVendor, date, time}) => {

  return (
    <div className="bg-mmblue w-1/2 h-3/5">
      <div>Your reservation has been added to the cart!</div>
      <div>Details:</div>
      <div>{selectedVendor.category}</div>
      <div>{selectedVendor.name}</div>
      <div>{date}</div>
      <div>{time}</div>
      <div className="flex flex-col items-center">
        <button
          className="bg-mmcream text-mmblue px-4 py-2 mb-4 rounded hover:bg-mmsand"
          onClick={() => handleClose()}
        >
          Add More Services
        </button>
        <Link to="/cart" className="text-mmcream hover:text-mmsand">
          <CartIcon />
        </Link>
      </div>
      <div className="absolute top-4 right-4">
      </div>
    </div>
  )
}

export default Confirmation;