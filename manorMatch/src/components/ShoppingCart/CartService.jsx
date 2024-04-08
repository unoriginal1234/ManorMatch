import { TrashIcon } from './icons/TrashIcon';
import { Tooltip } from '@nextui-org/react';

const CartService = ({ service, photo, price, onRemove }) => {
  return (
    <div className='grid grid-cols-8 gap-4 border-b pt-2 pb-2 mb-4 items-center'>
      <div className='col-span-1'>
        <img src={photo} alt={service} className="w-full h-auto" />
      </div>
      <div className='col-span-4 px-4 flex justify-between items-center'>
        <p className='font-semibold text-mmcream'>{service}</p>
      </div>
      <div className='col-span-2 text-right font-semibold text-mmcream'>
        ${price}
      </div>
      {onRemove && (
        <Tooltip content={<span className="text-mmcream">Remove</span>} placement="top">
          <div className='col-span-1 cursor-pointer' onClick={onRemove}>
            <TrashIcon/>
          </div>
        </Tooltip>
      )}
    </div>
  );
}

export default CartService;
