import React from 'react';

const BillInput = ({ billInput, setBillInput }) => {
  return (
    <div className='grid gap-2'>
      <label className='text-sm text-DarkGrayishCyan ' htmlFor='bill'>
        Bill
      </label>
      <input
        name='bill'
        id='bill'
        type='text'
        className='h-10 border-2 p-1 bg-VeryLightGrayishCyan outline-LightGrayishCyan text-VeryDarkCyan'
        placeholder='Enter bill $'
        value={billInput}
        onChange={e => setBillInput(e.target.value)}
      />
    </div>
  );
};

export default BillInput;
