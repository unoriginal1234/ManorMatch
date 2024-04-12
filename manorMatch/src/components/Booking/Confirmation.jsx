import { Link } from 'react-router-dom';
import  CartIcon  from '../ShoppingCart/icons/CartIcon.jsx';

const Confirmation = ({ handleClose, selectedVendor, date, time}) => {

  return (
    <div className="bg-mmblue w-1/2 h-3/5 relative flex flex-col items-center justify-center text-center">
    <div className="mb-4">
      <div className="text-lg sm:text-xl md:text-xl lg:text-3xl">Your reservation has been added to the cart!</div>
      <div className="mt-4">Details:</div>
      <div>{selectedVendor.category}</div>
      <div>{selectedVendor.name}</div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
    <div className="flex justify-center items-center py-8">
      <button
        className="bg-mmcream text-mmblue px-4 py-2 rounded hover:bg-mmsand transition-colors duration-300 mx-2"
        onClick={() => handleClose()}>
        Add More Services
      </button>
      <Link to="/cart" className="inline-block text-mmcream hover:text-mmsand mx-2">
        <CartIcon className="fill-current text-mmcream hover:text-mmsand" />
      </Link>
    </div>
  </div>

  )
}

export default Confirmation;