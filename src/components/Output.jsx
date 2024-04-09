import React from 'react';

const Output = ({ tipAmount, totalPerPerson }) => {
  return (
    <div className='grid gap-14 pt-6'>
      <div className='flex items-center justify-between '>
        <div>
          <h3 className='text-LightGrayishCyan'>Tip amount</h3>
          <p className='text-GrayishCyan'>/ person</p>
        </div>
        <h3 className='text-primary text-6xl'>{tipAmount}</h3>
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-LightGrayishCyan'>Total</h3>
            <p className='text-GrayishCyan'>/ person</p>
          </div>
          <h3 className='text-6xl text-primary'>{totalPerPerson}</h3>
        </div>
      </div>
      <div>
        <button className='bg-primary w-full rounded-md text-VeryDarkCyan py-2'>Reset</button>
      </div>
    </div>
  );
};

export default Output;
