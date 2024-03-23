import React from 'react';

function Item() {
  return (
    <div className='py-4 cursor-pointer'>
      <ul className='flex flex-wrap  justify-between'>
        <li className='px-2 py-1 hover:text-teal-500'>Cold Relief</li>
        <li className='px-2 py-1 hover:text-teal-500'>Cold and Flu</li>
        <li className='px-2 py-1 hover:text-teal-500'>Diabetes and Care</li>
        <li className='px-2 py-1 hover:text-teal-500'>Digestive Health</li>
        <li className='px-2 py-1 hover:text-teal-500'>First Aid</li>
        <li className='px-2 py-1 hover:text-teal-500'>Skin Care</li>
        <li className='px-2 py-1 hover:text-teal-500'>Child and Baby Care</li>
        <li className='px-2 py-1 hover:text-teal-500'>Heart Health</li>
        <li className='px-2 py-1 hover:text-teal-500'>Eye and Ear Care</li>
        <li className='px-2 py-1 hover:text-teal-500'>Respiratory Health</li>
      </ul>
    </div>
  );
}

export default Item;
