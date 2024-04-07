import { TrashIcon } from './icons/TrashIcon';
import { Tooltip } from '@nextui-org/react';

const CartService = ({ service, price, onRemove }) => {
  return (
    <div className='grid grid-cols-8 gap-4 border-b pt-2 pb-2 mb-4 items-center'>
      <div className='col-span-5 px-4 flex justify-between items-center'>
        <p className='font-semibold text-mmcream'>{service}</p>
        <div className='text-right font-semibold text-mmcream'>
          ${price}
        </div>
      </div>
      {onRemove && (
        <Tooltip content='Remove' placement='top'>
          <div className='ml-6 cursor-pointer' onClick={onRemove}>
            <TrashIcon className='w-3 h-3' />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default CartService;
