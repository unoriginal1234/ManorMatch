import { Link } from 'react-router-dom';
import  CartIcon  from '../ShoppingCart/icons/CartIcon.jsx';

const Confirmation = ({ handleClose, selectedVendor, date, time}) => {

  return (
    <div className="bg-mmblue w-1/2 h-3/5 text-center text-xl border-2 border-white rounded-lg shadow-md m-auto my-8">
    <div className="text-4xl text-white py-8">Your reservation has been added to the cart!</div>
    <div className="text-3xl text-white py-4 underline">Details:</div>

    {/* Grid layout for What, Who, When and their content */}
    <div className="grid grid-cols-3 gap-4 px-8">
      <div className="col-span-1">
        <div className="text-2xl text-white py-3">What:</div>
        <div className="text-2xl text-white py-3">Who:</div>
        <div className="text-2xl text-white py-3">When:</div>
      </div>
      <div className="col-span-1 text-left">
        <div className="text-2xl text-white py-3">{selectedVendor.category}</div>
        <div className="text-2xl text-white py-3">{selectedVendor.name}</div>
        <div className="text-2xl text-white py-3">
          <div className="font-bold">{date}</div>
          <div className="font-bold">{time}</div>
        </div>
      </div>
      <div className="col-span-1"></div> {/* Empty third column */}
    </div>

    <div className="flex justify-center items-center py-8">
      <button
        className="bg-mmcream text-mmblue px-4 py-2 rounded hover:bg-mmsand transition-colors duration-300 mx-2"
        onClick={() => handleClose()}
      >
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